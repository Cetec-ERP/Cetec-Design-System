import { hasValidateIgnoreComment } from '../utils.js';

const RULE_NAME = 'no-important';

const IMPORTANT_PATTERN = /!\s*important\b/;

const containsImportant = (value) =>
  typeof value === 'string' && IMPORTANT_PATTERN.test(value);

const noImportantRule = {
  meta: {
    type: 'problem',
    docs: {
      description: "Disallow '!important' in source strings and templates.",
      recommended: false,
    },
    schema: [],
    messages: {
      avoidImportant:
        "Do not use '!important'. Fix the selector specificity, component API, or recipe instead.",
    },
  },
  create(context) {
    return {
      Literal(node) {
        if (!containsImportant(node.value)) {
          return;
        }

        if (hasValidateIgnoreComment(context, node, RULE_NAME)) {
          return;
        }

        context.report({
          node,
          messageId: 'avoidImportant',
        });
      },
      TemplateElement(node) {
        if (!containsImportant(node.value.cooked)) {
          return;
        }

        if (hasValidateIgnoreComment(context, node, RULE_NAME)) {
          return;
        }

        context.report({
          node,
          messageId: 'avoidImportant',
        });
      },
    };
  },
};

export { RULE_NAME, noImportantRule };
