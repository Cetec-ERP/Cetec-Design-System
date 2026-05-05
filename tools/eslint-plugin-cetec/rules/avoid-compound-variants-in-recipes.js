const RULE_NAME = 'avoid-compound-variants-in-recipes';

// tag.ts intentionally keeps compoundVariants for the hue/variant matrix.
const EXCLUDED_FILES = new Set(['src/recipes/tag.ts']);

const isExcludedFile = (context) => {
  const filename = context.getFilename().replaceAll('\\', '/');

  return [...EXCLUDED_FILES].some((excludedFile) =>
    filename.endsWith(excludedFile),
  );
};

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

const avoidCompoundVariantsInRecipesRule = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow recipe compoundVariants so conditional variant values remain usable.',
      recommended: false,
    },
    schema: [],
    messages: {
      avoidCompoundVariants:
        'Avoid compoundVariants in recipes that need conditional variants. Prefer component-local CSS variables or explicit runtime booleans for combined styling.',
    },
  },
  create(context) {
    if (isExcludedFile(context)) {
      return {};
    }

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
          if (getPropertyName(property) !== 'compoundVariants') {
            continue;
          }

          context.report({
            node: property,
            messageId: 'avoidCompoundVariants',
          });
        }
      },
    };
  },
};

export { RULE_NAME, avoidCompoundVariantsInRecipesRule };
