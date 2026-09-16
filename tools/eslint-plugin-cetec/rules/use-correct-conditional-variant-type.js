const RULE_NAME = 'use-correct-conditional-variant-type';

const CONDITIONAL_VARIANT_PROPS = new Set(['size', 'variant']);

const getPropertyName = (node) => {
  if (!node) {
    return null;
  }

  if (node.type === 'Identifier') {
    return node.name;
  }

  if (node.type === 'Literal') {
    return node.value;
  }

  return null;
};

const getTSTypeReferenceName = (node) => {
  if (!node || node.type !== 'TSTypeReference') {
    return null;
  }

  if (node.typeName.type === 'Identifier') {
    return node.typeName.name;
  }

  return null;
};

const getVariantPropKey = (node) => {
  if (!node || node.type !== 'TSIndexedAccessType') {
    return null;
  }

  if (node.indexType.type !== 'TSLiteralType') {
    return null;
  }

  return getPropertyName(node.indexType.literal);
};

const isRecipeVariantPropsReference = (node, variantPropImports) => {
  const typeName = getTSTypeReferenceName(node);

  return Boolean(typeName && variantPropImports.has(typeName));
};

const resolvesToConditionalVariantProp = (
  node,
  expectedPropName,
  variantPropImports,
  localTypeAliases,
  visited = new Set(),
) => {
  if (!node) {
    return false;
  }

  if (node.type === 'TSIndexedAccessType') {
    const propKey = getVariantPropKey(node);

    return (
      propKey === expectedPropName &&
      node.objectType.type === 'TSTypeReference' &&
      isRecipeVariantPropsReference(node.objectType, variantPropImports)
    );
  }

  if (node.type === 'TSTypeReference') {
    const typeName = getTSTypeReferenceName(node);

    if (!typeName) {
      return false;
    }

    if (
      typeName === 'NonNullable' ||
      typeName === 'Extract' ||
      typeName === 'Exclude'
    ) {
      const typeParams = node.typeArguments ?? node.typeParameters;
      const [firstParam] = typeParams?.params ?? [];

      return resolvesToConditionalVariantProp(
        firstParam,
        expectedPropName,
        variantPropImports,
        localTypeAliases,
        visited,
      );
    }

    if (visited.has(typeName)) {
      return false;
    }

    const localAlias = localTypeAliases.get(typeName);

    if (!localAlias) {
      return false;
    }

    visited.add(typeName);

    return resolvesToConditionalVariantProp(
      localAlias,
      expectedPropName,
      variantPropImports,
      localTypeAliases,
      visited,
    );
  }

  if (node.type === 'TSParenthesizedType') {
    return resolvesToConditionalVariantProp(
      node.typeAnnotation,
      expectedPropName,
      variantPropImports,
      localTypeAliases,
      visited,
    );
  }

  return false;
};

const useCorrectConditionalVariantTypeRule = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Require size and variant props to derive from recipe variant prop types so conditional values remain accepted.',
      recommended: false,
    },
    schema: [],
    messages: {
      useCorrectConditionalVariantType:
        "Prop '{{propName}}' should derive from a recipe variant prop type like `{{example}}` so conditional values remain supported.",
    },
  },
  create(context) {
    const variantPropImports = new Set();
    const localTypeAliases = new Map();

    return {
      ImportDeclaration(node) {
        if (node.source.value !== '@styled-system/recipes') {
          return;
        }

        for (const specifier of node.specifiers) {
          if (
            specifier.type === 'ImportSpecifier' &&
            specifier.importKind === 'type' &&
            specifier.imported.type === 'Identifier' &&
            specifier.imported.name.endsWith('VariantProps')
          ) {
            variantPropImports.add(specifier.local.name);
          }
        }
      },
      TSTypeAliasDeclaration(node) {
        localTypeAliases.set(node.id.name, node.typeAnnotation);

        if (
          node.parent?.type !== 'ExportNamedDeclaration' ||
          !node.id.name.endsWith('Props')
        ) {
          return;
        }

        if (variantPropImports.size === 0) {
          return;
        }

        const typeLiterals = [];

        if (node.typeAnnotation.type === 'TSTypeLiteral') {
          typeLiterals.push(node.typeAnnotation);
        }

        if (node.typeAnnotation.type === 'TSIntersectionType') {
          typeLiterals.push(
            ...node.typeAnnotation.types.filter(
              (typeNode) => typeNode.type === 'TSTypeLiteral',
            ),
          );
        }

        for (const typeLiteral of typeLiterals) {
          for (const member of typeLiteral.members) {
            if (
              member.type !== 'TSPropertySignature' ||
              !member.typeAnnotation
            ) {
              continue;
            }

            const propName = getPropertyName(member.key);

            if (!CONDITIONAL_VARIANT_PROPS.has(propName)) {
              continue;
            }

            if (
              resolvesToConditionalVariantProp(
                member.typeAnnotation.typeAnnotation,
                propName,
                variantPropImports,
                localTypeAliases,
              )
            ) {
              continue;
            }

            context.report({
              node: member,
              messageId: 'useCorrectConditionalVariantType',
              data: {
                propName,
                example: `SomeVariantProps['${propName}']`,
              },
            });
          }
        }
      },
    };
  },
};

export { RULE_NAME, useCorrectConditionalVariantTypeRule };
