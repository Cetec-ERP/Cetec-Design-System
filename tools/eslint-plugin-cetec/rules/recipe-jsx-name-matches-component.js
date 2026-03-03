const RULE_NAME = 'recipe-jsx-name-matches-component';

const toPascalCase = (value) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('');

const recipeJsxNameMatchesComponentRule = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Ensure recipe jsx entries include the component name derived from the recipe export.',
      recommended: false,
    },
    schema: [],
    messages: {
      missingExpectedJsx:
        "Recipe export '{{exportName}}' should include '{{expectedJsxName}}' in its jsx array.",
    },
  },
  create(context) {
    const reportIfMissingExpectedJsx = (node, exportName, jsxValues) => {
      const recipeSuffix = 'Recipe';

      if (!exportName.endsWith(recipeSuffix)) {
        return;
      }

      const baseName = exportName.slice(0, -recipeSuffix.length);
      const expectedJsxName = toPascalCase(baseName);

      if (!expectedJsxName) {
        return;
      }

      if (jsxValues.includes(expectedJsxName)) {
        return;
      }

      context.report({
        node,
        messageId: 'missingExpectedJsx',
        data: {
          exportName,
          expectedJsxName,
        },
      });
    };

    return {
      ExportNamedDeclaration(node) {
        if (
          !node.declaration ||
          node.declaration.type !== 'VariableDeclaration'
        ) {
          return;
        }

        for (const declaration of node.declaration.declarations) {
          if (declaration.id.type !== 'Identifier') {
            continue;
          }

          if (
            !declaration.init ||
            declaration.init.type !== 'CallExpression' ||
            declaration.init.callee.type !== 'Identifier' ||
            !['defineRecipe', 'defineSlotRecipe'].includes(
              declaration.init.callee.name,
            )
          ) {
            continue;
          }

          const [firstArg] = declaration.init.arguments;

          if (!firstArg || firstArg.type !== 'ObjectExpression') {
            continue;
          }

          const jsxProperty = firstArg.properties.find((property) => {
            if (property.type !== 'Property') {
              return false;
            }

            const key = property.key;
            const keyName =
              key.type === 'Identifier'
                ? key.name
                : key.type === 'Literal'
                  ? key.value
                  : null;

            return keyName === 'jsx';
          });

          if (!jsxProperty || jsxProperty.type !== 'Property') {
            continue;
          }

          if (jsxProperty.value.type !== 'ArrayExpression') {
            continue;
          }

          const jsxValues = jsxProperty.value.elements
            .filter((element) => element && element.type === 'Literal')
            .map((element) => String(element.value));

          reportIfMissingExpectedJsx(
            declaration.id,
            declaration.id.name,
            jsxValues,
          );
        }
      },
    };
  },
};

export { RULE_NAME, recipeJsxNameMatchesComponentRule };
