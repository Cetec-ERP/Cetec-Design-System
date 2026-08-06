import path from 'node:path';
import process from 'node:process';

import ts from 'typescript';

const projectRoot = process.cwd();
const warnOnly = process.argv.includes('--warn');
const entryPath = path.join(projectRoot, 'src/index.ts');
const configPath = ts.findConfigFile(
  projectRoot,
  ts.sys.fileExists,
  'tsconfig.json',
);

if (!configPath) {
  throw new Error('Unable to find tsconfig.json');
}

const config = ts.readConfigFile(configPath, ts.sys.readFile);
if (config.error) {
  throw new Error(
    ts.flattenDiagnosticMessageText(config.error.messageText, '\n'),
  );
}

const parsedConfig = ts.parseJsonConfigFileContent(
  config.config,
  ts.sys,
  projectRoot,
);
const program = ts.createProgram(parsedConfig.fileNames, parsedConfig.options);
const checker = program.getTypeChecker();
const entrySource = program.getSourceFile(entryPath);

if (!entrySource) {
  throw new Error(`Unable to load ${entryPath}`);
}

const failures = [];
const checkedSymbols = new Set();
const checkedProps = new Set();

const resolveAlias = (symbol) => {
  const seen = new Set();
  let current = symbol;

  while (
    current &&
    current.flags & ts.SymbolFlags.Alias &&
    !seen.has(current)
  ) {
    seen.add(current);
    current = checker.getAliasedSymbol(current);
  }

  return current;
};

const declarationDocNode = (declaration) => {
  if (ts.isVariableDeclaration(declaration)) {
    return declaration.parent.parent;
  }

  return declaration;
};

const hasDirectJsDoc = (declaration) =>
  Boolean(declarationDocNode(declaration).jsDoc?.length);

const location = (node) => {
  const source = node.getSourceFile();
  const { line, character } = source.getLineAndCharacterOfPosition(
    node.getStart(source),
  );
  return `${path.relative(projectRoot, source.fileName)}:${line + 1}:${character + 1}`;
};

const fail = (node, message) => {
  failures.push(`${location(node)} ${message}`);
};

const getDeclaration = (symbol) =>
  symbol?.valueDeclaration ?? symbol?.declarations?.[0];

const getFunctionParameter = (declaration) => {
  if (ts.isFunctionDeclaration(declaration)) {
    return declaration.parameters[0];
  }

  if (
    ts.isVariableDeclaration(declaration) &&
    declaration.initializer &&
    (ts.isArrowFunction(declaration.initializer) ||
      ts.isFunctionExpression(declaration.initializer))
  ) {
    return declaration.initializer.parameters[0];
  }

  return undefined;
};

const getPropsDeclaration = (componentDeclaration) => {
  const parameter = getFunctionParameter(componentDeclaration);
  if (!parameter?.type || !ts.isTypeReferenceNode(parameter.type)) {
    return undefined;
  }

  const typeSymbol = resolveAlias(
    checker.getSymbolAtLocation(parameter.type.typeName),
  );
  return typeSymbol?.declarations?.find(
    (declaration) =>
      ts.isTypeAliasDeclaration(declaration) ||
      ts.isInterfaceDeclaration(declaration),
  );
};

const collectOwnedProperties = (typeNode, properties) => {
  if (ts.isTypeLiteralNode(typeNode)) {
    for (const member of typeNode.members) {
      if (ts.isPropertySignature(member) || ts.isMethodSignature(member)) {
        properties.push(member);
      }
    }
    return;
  }

  if (ts.isIntersectionTypeNode(typeNode) || ts.isUnionTypeNode(typeNode)) {
    for (const memberType of typeNode.types) {
      collectOwnedProperties(memberType, properties);
    }
    return;
  }

  if (ts.isParenthesizedTypeNode(typeNode)) {
    collectOwnedProperties(typeNode.type, properties);
  }
};

const checkPropsDeclaration = (declaration, componentName) => {
  const key = `${declaration.getSourceFile().fileName}:${declaration.pos}`;
  if (checkedProps.has(key)) {
    return;
  }
  checkedProps.add(key);

  if (!hasDirectJsDoc(declaration)) {
    fail(
      declaration,
      `${declaration.name.text} needs direct JSDoc for ${componentName}.`,
    );
  }

  const properties = [];
  if (ts.isInterfaceDeclaration(declaration)) {
    properties.push(
      ...declaration.members.filter(
        (member) =>
          ts.isPropertySignature(member) || ts.isMethodSignature(member),
      ),
    );
  } else {
    collectOwnedProperties(declaration.type, properties);
  }

  for (const property of properties) {
    if (!hasDirectJsDoc(property)) {
      fail(
        property,
        `${declaration.name.text}.${property.name.getText()} needs direct JSDoc.`,
      );
    }
  }
};

const isCallableComponent = (name, symbol, declaration) => {
  if (!/^[A-Z]/.test(name) || !declaration) {
    return false;
  }

  const type = checker.getTypeOfSymbolAtLocation(symbol, declaration);
  return type.getCallSignatures().length > 0;
};

const checkPublicSymbol = (exportSpecifier, componentModule) => {
  const exportedName = exportSpecifier.name.text;
  const symbol = resolveAlias(
    checker.getSymbolAtLocation(exportSpecifier.name),
  );
  const declaration = getDeclaration(symbol);

  if (!symbol || !declaration) {
    fail(exportSpecifier, `Unable to resolve public export ${exportedName}.`);
    return;
  }

  const key = `${declaration.getSourceFile().fileName}:${declaration.pos}`;
  if (!checkedSymbols.has(key)) {
    checkedSymbols.add(key);
    if (!hasDirectJsDoc(declaration)) {
      fail(declaration, `Public export ${exportedName} needs direct JSDoc.`);
    }
  }

  if (
    componentModule &&
    isCallableComponent(exportedName, symbol, declaration)
  ) {
    const propsDeclaration = getPropsDeclaration(declaration);
    if (propsDeclaration) {
      checkPropsDeclaration(propsDeclaration, exportedName);
    }
  }
};

for (const statement of entrySource.statements) {
  if (
    !ts.isExportDeclaration(statement) ||
    !statement.exportClause ||
    !ts.isNamedExports(statement.exportClause)
  ) {
    continue;
  }

  const moduleName = ts.isStringLiteral(statement.moduleSpecifier)
    ? statement.moduleSpecifier.text
    : '';

  // Panda declaration shims mirror generated upstream types and are not a
  // hand-authored component API.
  if (moduleName === './types/panda-augment') {
    continue;
  }

  const componentModule = moduleName.startsWith('./components/');
  for (const exportSpecifier of statement.exportClause.elements) {
    checkPublicSymbol(exportSpecifier, componentModule);
  }
}

if (failures.length > 0) {
  const report = warnOnly ? console.warn : console.error;
  report(
    `Public JSDoc ${warnOnly ? 'warning' : 'check failed'} with ${failures.length} issue(s):`,
  );
  for (const failure of failures) {
    report(`- ${failure}`);
  }
  if (!warnOnly) {
    process.exitCode = 1;
  }
} else {
  console.log(
    `Public JSDoc check passed (${checkedSymbols.size} exports, ${checkedProps.size} props types).`,
  );
}
