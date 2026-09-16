const RULE_NAME = 'no-static-css-in-recipe-files';

const isRecipeDefinitionCall = (node) => {
  if (!node || node.type !== 'CallExpression') {
    return false;
  }

  return (
    node.callee.type === 'Identifier' &&
    ['defineRecipe', 'defineSlotRecipe'].includes(node.callee.name)
  );
};

const getPropertyName = (property) => {
  if (!property || property.type !== 'Property') {
    return null;
  }

  const { key } = property;

  if (key.type === 'Identifier') {
    return key.name;
  }

  if (key.type === 'Literal') {
    return key.value;
  }

  return null;
};

const noStaticCssInRecipeFilesRule = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow staticCss declarations inside recipe files and require staticCss registration in panda.config.ts.',
      recommended: false,
    },
    schema: [],
    messages: {
      noStaticCssInRecipeFiles:
        'Do not declare staticCss inside recipe files. Register conservative staticCss coverage in panda.config.ts instead.',
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (!isRecipeDefinitionCall(node)) {
          return;
        }

        const [firstArg] = node.arguments;

        if (!firstArg || firstArg.type !== 'ObjectExpression') {
          return;
        }

        for (const property of firstArg.properties) {
          if (getPropertyName(property) !== 'staticCss') {
            continue;
          }

          context.report({
            node: property,
            messageId: 'noStaticCssInRecipeFiles',
          });
        }
      },
    };
  },
};

export { RULE_NAME, noStaticCssInRecipeFilesRule };
