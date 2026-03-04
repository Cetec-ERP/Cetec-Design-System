const RULE_NAME = 'no-inline-style-prop';

const noInlineStylePropRule = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow usage of the style prop in JSX.',
      recommended: false,
    },
    schema: [],
    messages: {
      avoidStyleProp:
        'Do not use style={{}} in JSX. Use tokens, recipes, or Panda style props instead.',
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.type !== 'JSXIdentifier') {
          return;
        }

        if (node.name.name !== 'style') {
          return;
        }

        if (
          !node.value ||
          node.value.type !== 'JSXExpressionContainer' ||
          node.value.expression.type !== 'ObjectExpression'
        ) {
          return;
        }

        context.report({
          node,
          messageId: 'avoidStyleProp',
        });
      },
    };
  },
};

export { RULE_NAME, noInlineStylePropRule };
