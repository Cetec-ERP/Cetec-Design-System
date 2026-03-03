import path from 'node:path';

const RULE_NAME = 'recipe-export-name-matches-file';

const recipeExportNameMatchesFileRule = {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Ensure recipe export names match the recipe filename (<fileBaseName>Recipe).',
      recommended: false,
    },
    schema: [],
    messages: {
      mismatch:
        "Recipe export '{{actual}}' should be named '{{expected}}' to match this file.",
    },
  },
  create(context) {
    const filename = context.getFilename();
    const fileBaseName = path.basename(filename, path.extname(filename));
    const expectedExportName = `${fileBaseName}Recipe`;

    const reportMismatch = (node, actualName) => {
      if (actualName === expectedExportName) {
        return;
      }

      context.report({
        node,
        messageId: 'mismatch',
        data: {
          actual: actualName,
          expected: expectedExportName,
        },
      });
    };

    return {
      ExportNamedDeclaration(node) {
        if (
          !node.declaration ||
          node.declaration.type !== 'VariableDeclaration'
        ) {
          return;
        }

        for (const declaration of node.declaration.declarations) {
          if (declaration.id.type !== 'Identifier') {
            continue;
          }

          const exportName = declaration.id.name;

          if (!exportName.endsWith('Recipe')) {
            continue;
          }

          reportMismatch(declaration.id, exportName);
        }
      },
      ExportSpecifier(node) {
        const exportedName =
          node.exported.type === 'Identifier' ? node.exported.name : null;

        if (!exportedName || !exportedName.endsWith('Recipe')) {
          return;
        }

        reportMismatch(node.exported, exportedName);
      },
    };
  },
};

export { RULE_NAME, recipeExportNameMatchesFileRule };
