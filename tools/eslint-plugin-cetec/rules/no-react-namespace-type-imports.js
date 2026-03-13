const RULE_NAME = 'no-react-namespace-type-imports';

const noReactNamespaceTypeImportsRule = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Disallow React namespace type imports/usages in favor of named type imports from react.',
      recommended: false,
    },
    schema: [],
    messages: {
      noReactDefaultImport:
        "Avoid default or namespace React imports. Use named imports from 'react' instead.",
      noReactNamespaceType:
        "Avoid React namespace type '{{typeName}}'. Import '{{typeName}}' directly from 'react'.",
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value !== 'react') {
          return;
        }

        for (const specifier of node.specifiers) {
          if (
            specifier.type === 'ImportDefaultSpecifier' ||
            specifier.type === 'ImportNamespaceSpecifier'
          ) {
            context.report({
              node: specifier,
              messageId: 'noReactDefaultImport',
            });
          }
        }
      },
      TSQualifiedName(node) {
        if (
          node.left.type === 'Identifier' &&
          node.left.name === 'React' &&
          node.right.type === 'Identifier'
        ) {
          context.report({
            node,
            messageId: 'noReactNamespaceType',
            data: {
              typeName: node.right.name,
            },
          });
        }
      },
    };
  },
};

export { RULE_NAME, noReactNamespaceTypeImportsRule };
