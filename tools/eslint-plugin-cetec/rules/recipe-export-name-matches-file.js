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
    const recipeExports = [];

    const addRecipeExport = (node, exportName) => {
      if (!exportName.endsWith('Recipe')) {
        return;
      }

      recipeExports.push({
        node,
        exportName,
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
          addRecipeExport(declaration.id, exportName);
        }
      },
      ExportSpecifier(node) {
        const exportedName =
          node.exported.type === 'Identifier' ? node.exported.name : null;

        if (!exportedName) {
          return;
        }

        addRecipeExport(node.exported, exportedName);
      },
      'Program:exit'() {
        if (recipeExports.length === 0) {
          return;
        }

        const hasExpectedExport = recipeExports.some(
          ({ exportName }) => exportName === expectedExportName,
        );

        if (hasExpectedExport) {
          return;
        }

        const [{ node, exportName: actual }] = recipeExports;

        context.report({
          node,
          messageId: 'mismatch',
          data: {
            actual,
            expected: expectedExportName,
          },
        });
      },
    };
  },
};

export { RULE_NAME, recipeExportNameMatchesFileRule };
