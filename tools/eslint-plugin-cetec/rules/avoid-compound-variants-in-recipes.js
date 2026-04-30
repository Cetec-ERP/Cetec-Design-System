import { hasValidateIgnoreComment } from '../utils.js';

const RULE_NAME = 'avoid-compound-variants-in-recipes';

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

const hasInlineValidateIgnore = (context, node, ruleName) => {
  const sourceCode = context.sourceCode ?? context.getSourceCode();
  const nodeLine = node.loc.start.line;
  const lines = sourceCode.getText().split('\n');
  const candidateLines = [lines[nodeLine - 2], lines[nodeLine - 1]].filter(
    Boolean,
  );

  return candidateLines.some((line) => {
    const match = line.match(/validate-ignore:\s*(.+?)(?:\s*[—–\-]{1,2}.+)?$/);
    if (!match) {
      return false;
    }

    return match[1].split(/\s*,\s*/).some((value) => value.trim() === ruleName);
  });
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

          if (
            hasValidateIgnoreComment(context, property, RULE_NAME) ||
            hasInlineValidateIgnore(context, property, RULE_NAME)
          ) {
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
