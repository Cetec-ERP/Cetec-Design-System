const RULE_NAME = 'no-pixel-units';

const PIXEL_UNIT_PATTERN = /-?(?:\d+(?:\.\d+)?|\.\d+)px\b/;

const getAttributeValueString = (valueNode) => {
  if (!valueNode) {
    return null;
  }

  if (valueNode.type === 'Literal' && typeof valueNode.value === 'string') {
    return valueNode.value;
  }

  if (valueNode.type !== 'JSXExpressionContainer') {
    return null;
  }

  const expression = valueNode.expression;

  if (expression.type === 'Literal' && typeof expression.value === 'string') {
    return expression.value;
  }

  if (
    expression.type === 'TemplateLiteral' &&
    expression.expressions.length === 0
  ) {
    return expression.quasis.map((quasi) => quasi.value.cooked ?? '').join('');
  }

  return null;
};

const noPixelUnitsRule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow pixel units in JSX attribute values.',
      recommended: false,
    },
    schema: [],
    messages: {
      avoidPixelUnits:
        "Avoid pixel units ('px'). Use design tokens or tokenized values instead.",
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        const value = getAttributeValueString(node.value);

        if (!value || !PIXEL_UNIT_PATTERN.test(value)) {
          return;
        }

        context.report({
          node,
          messageId: 'avoidPixelUnits',
        });
      },
    };
  },
};

export { RULE_NAME, noPixelUnitsRule };
