import { hasValidateIgnoreComment } from '../utils.js';

const RULE_NAME = 'discourage-css-variable-styling';

const CSS_VAR_PATTERN = /var\(--[a-zA-Z0-9-_]+\)/;

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

const discourageCssVariableStylingRule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Discourage direct CSS variable usage in JSX styling attributes.',
      recommended: false,
    },
    schema: [],
    messages: {
      discourageCssVar:
        'Prefer design tokens/semantic tokens over raw CSS variable references in styling props.',
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        const value = getAttributeValueString(node.value);

        if (!value || !CSS_VAR_PATTERN.test(value)) {
          return;
        }

        if (hasValidateIgnoreComment(context, node, RULE_NAME)) {
          return;
        }

        context.report({
          node,
          messageId: 'discourageCssVar',
        });
      },
    };
  },
};

export { RULE_NAME, discourageCssVariableStylingRule };
