import {
  RULE_NAME as noHardcodedDesignValuesInRecipesRuleName,
  noHardcodedDesignValuesInRecipesRule,
} from './rules/no-hardcoded-design-values-in-recipes.js';
import {
  RULE_NAME as recipeJsxNameMatchesComponentRuleName,
  recipeJsxNameMatchesComponentRule,
} from './rules/recipe-jsx-name-matches-component.js';
import {
  RULE_NAME as recipeExportNameMatchesFileRuleName,
  recipeExportNameMatchesFileRule,
} from './rules/recipe-export-name-matches-file.js';

/**
 * Local Cetec ESLint plugin.
 *
 * Phase 2 scaffold:
 * - Keep this plugin small and local to the repo.
 * - Add custom rules incrementally under `rules/`.
 * - Rule ids are exposed as `cetec/<rule-name>`.
 */
const cetecPlugin = {
  meta: {
    name: 'eslint-plugin-cetec',
    version: '0.0.0-local',
  },
  rules: {
    [noHardcodedDesignValuesInRecipesRuleName]:
      noHardcodedDesignValuesInRecipesRule,
    [recipeExportNameMatchesFileRuleName]: recipeExportNameMatchesFileRule,
    [recipeJsxNameMatchesComponentRuleName]: recipeJsxNameMatchesComponentRule,
  },
};

export default cetecPlugin;
