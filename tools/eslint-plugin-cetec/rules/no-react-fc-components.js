import { hasValidateIgnoreComment } from '../utils.js';

const RULE_NAME = 'no-react-fc-components';

const isReactFcTypeReference = (node) => {
  if (!node || node.type !== 'TSTypeReference') {
    return false;
  }

  if (node.typeName.type === 'Identifier') {
    return node.typeName.name === 'FC';
  }

  return (
    node.typeName.type === 'TSQualifiedName' &&
    node.typeName.left.type === 'Identifier' &&
    node.typeName.left.name === 'React' &&
    node.typeName.right.type === 'Identifier' &&
    node.typeName.right.name === 'FC'
  );
};

const noReactFcComponentsRule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Disallow React.FC component declarations in favor of typed props parameters.',
      recommended: false,
    },
    schema: [],
    messages: {
      avoidReactFc:
        'Avoid React.FC component annotations. Type component props on the function parameter instead.',
    },
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (node.id.type !== 'Identifier' || !node.id.typeAnnotation) {
          return;
        }

        if (
          !node.init ||
          (node.init.type !== 'ArrowFunctionExpression' &&
            node.init.type !== 'FunctionExpression')
        ) {
          return;
        }

        const typeAnnotationNode = node.id.typeAnnotation.typeAnnotation;

        if (!isReactFcTypeReference(typeAnnotationNode)) {
          return;
        }

        if (hasValidateIgnoreComment(context, typeAnnotationNode, RULE_NAME)) {
          return;
        }

        context.report({
          node: typeAnnotationNode,
          messageId: 'avoidReactFc',
        });
      },
    };
  },
};

export { RULE_NAME, noReactFcComponentsRule };
