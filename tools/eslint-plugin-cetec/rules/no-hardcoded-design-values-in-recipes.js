const RULE_NAME = 'no-hardcoded-design-values-in-recipes';

const HEX_COLOR_PATTERN =
  /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

const COLOR_FUNCTION_PATTERN = /^(?:rgb|rgba|hsl|hsla)\(/;

const ABSOLUTE_UNIT_PATTERN =
  /^-?(?:\d+(?:\.\d+)?|\.\d+)(?:px|rem|em|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc)$/;

const INTEGER_PATTERN = /^-?\d+$/;

const isRecipeDefinitionCall = (node) => {
  if (!node || node.type !== 'CallExpression') {
    return false;
  }

  return (
    node.callee.type === 'Identifier' &&
    ['defineRecipe', 'defineSlotRecipe'].includes(node.callee.name)
  );
};

const isInsideRecipeConfig = (node) => {
  let current = node;
  const nodeRange = node.range;

  if (!nodeRange) {
    return false;
  }

  while (current) {
    if (current.type === 'CallExpression' && isRecipeDefinitionCall(current)) {
      const [firstArg] = current.arguments;

      if (!firstArg || !firstArg.range) {
        return false;
      }

      return (
        nodeRange[0] >= firstArg.range[0] && nodeRange[1] <= firstArg.range[1]
      );
    }

    current = current.parent;
  }

  return false;
};

const shouldSkipByPropertyName = (node) => {
  const parent = node.parent;

  if (!parent || parent.type !== 'Property' || parent.value !== node) {
    return false;
  }

  const key = parent.key;
  const propertyName =
    key.type === 'Identifier'
      ? key.name
      : key.type === 'Literal'
        ? key.value
        : null;

  return ['className', 'slots'].includes(propertyName);
};

const noHardcodedDesignValuesInRecipesRule = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow hardcoded design values in recipes when token values should be used.',
      recommended: false,
    },
    schema: [],
    messages: {
      hardcodedString:
        "Found hardcoded design value '{{value}}' in recipe config. Prefer a token reference.",
      hardcodedNumber:
        "Found hardcoded numeric value '{{value}}' in recipe config. Prefer a token reference.",
    },
  },
  create(context) {
    const reportStringLiteral = (node, rawValue) => {
      const value = String(rawValue).trim();

      if (!value) {
        return;
      }

      if (INTEGER_PATTERN.test(value)) {
        return;
      }

      if (
        HEX_COLOR_PATTERN.test(value) ||
        COLOR_FUNCTION_PATTERN.test(value) ||
        ABSOLUTE_UNIT_PATTERN.test(value)
      ) {
        context.report({
          node,
          messageId: 'hardcodedString',
          data: { value },
        });
      }
    };

    return {
      Literal(node) {
        if (!isInsideRecipeConfig(node)) {
          return;
        }

        if (shouldSkipByPropertyName(node)) {
          return;
        }

        if (typeof node.value === 'number') {
          if (node.value === 0 || node.value === 1) {
            return;
          }

          context.report({
            node,
            messageId: 'hardcodedNumber',
            data: { value: String(node.value) },
          });
          return;
        }

        if (typeof node.value === 'string') {
          reportStringLiteral(node, node.value);
        }
      },
      TemplateLiteral(node) {
        if (!isInsideRecipeConfig(node)) {
          return;
        }

        if (node.expressions.length > 0) {
          return;
        }

        const value = node.quasis.map((quasi) => quasi.value.cooked).join('');
        reportStringLiteral(node, value);
      },
    };
  },
};

export { RULE_NAME, noHardcodedDesignValuesInRecipesRule };
