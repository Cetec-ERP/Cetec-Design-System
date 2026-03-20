const RULE_NAME = 'no-raw-font-weight-values';

const NUMERIC_STRING_PATTERN = /^\d+$/;

const isRawFontWeightValue = (node) => {
  if (!node) {
    return false;
  }

  if (node.type === 'Literal') {
    return (
      typeof node.value === 'number' ||
      (typeof node.value === 'string' &&
        NUMERIC_STRING_PATTERN.test(node.value))
    );
  }

  if (node.type === 'TemplateLiteral' && node.expressions.length === 0) {
    const value = node.quasis.map((quasi) => quasi.value.cooked ?? '').join('');
    return NUMERIC_STRING_PATTERN.test(value);
  }

  return false;
};

const noRawFontWeightValuesRule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow raw numeric fontWeight values in JSX style props.',
      recommended: false,
    },
    schema: [],
    messages: {
      avoidRawFontWeight:
        "Avoid raw fontWeight values. Use font weight tokens such as 'light', 'normal', 'medium', 'bold', or 'black'.",
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.type !== 'JSXIdentifier') {
          return;
        }

        if (node.name.name !== 'fontWeight') {
          return;
        }

        if (!node.value) {
          return;
        }

        if (node.value.type === 'Literal') {
          if (!isRawFontWeightValue(node.value)) {
            return;
          }

          context.report({
            node,
            messageId: 'avoidRawFontWeight',
          });
          return;
        }

        if (node.value.type !== 'JSXExpressionContainer') {
          return;
        }

        if (!isRawFontWeightValue(node.value.expression)) {
          return;
        }

        context.report({
          node,
          messageId: 'avoidRawFontWeight',
        });
      },
    };
  },
};

export { RULE_NAME, noRawFontWeightValuesRule };
