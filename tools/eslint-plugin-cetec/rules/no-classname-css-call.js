const RULE_NAME = 'no-classname-css-call';

const noClassnameCssCallRule = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Disallow className={css(...)} in JSX. Prefer style props, recipes, or splitProps patterns.',
      recommended: false,
    },
    schema: [],
    messages: {
      avoidClassNameCssCall:
        'Do not use className={css(...)} directly in JSX. Prefer Panda style props, recipes, or splitProps-generated className.',
    },
  },
  create(context) {
    return {
      JSXAttribute(node) {
        if (
          node.name.type !== 'JSXIdentifier' ||
          node.name.name !== 'className'
        ) {
          return;
        }

        if (!node.value || node.value.type !== 'JSXExpressionContainer') {
          return;
        }

        const expression = node.value.expression;
        if (expression.type !== 'CallExpression') {
          return;
        }

        if (
          expression.callee.type === 'Identifier' &&
          expression.callee.name === 'css'
        ) {
          context.report({
            node,
            messageId: 'avoidClassNameCssCall',
          });
        }
      },
    };
  },
};

export { RULE_NAME, noClassnameCssCallRule };
