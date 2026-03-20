import {
  RULE_NAME as noHardcodedDesignValuesInRecipesRuleName,
  noHardcodedDesignValuesInRecipesRule,
} from './rules/no-hardcoded-design-values-in-recipes.js';
import {
  RULE_NAME as noInlineStylePropRuleName,
  noInlineStylePropRule,
} from './rules/no-inline-style-prop.js';
import {
  RULE_NAME as noPixelUnitsRuleName,
  noPixelUnitsRule,
} from './rules/no-pixel-units.js';
import {
  RULE_NAME as discourageCssVariableStylingRuleName,
  discourageCssVariableStylingRule,
} from './rules/discourage-css-variable-styling.js';
import {
  RULE_NAME as noClassnameCssCallRuleName,
  noClassnameCssCallRule,
} from './rules/no-classname-css-call.js';
import {
  RULE_NAME as noRawFontWeightValuesRuleName,
  noRawFontWeightValuesRule,
} from './rules/no-raw-font-weight-values.js';
import {
  RULE_NAME as noReactFcComponentsRuleName,
  noReactFcComponentsRule,
} from './rules/no-react-fc-components.js';
import {
  RULE_NAME as noReactNamespaceTypeImportsRuleName,
  noReactNamespaceTypeImportsRule,
} from './rules/no-react-namespace-type-imports.js';
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
    [discourageCssVariableStylingRuleName]: discourageCssVariableStylingRule,
    [noClassnameCssCallRuleName]: noClassnameCssCallRule,
    [noHardcodedDesignValuesInRecipesRuleName]:
      noHardcodedDesignValuesInRecipesRule,
    [noInlineStylePropRuleName]: noInlineStylePropRule,
    [noPixelUnitsRuleName]: noPixelUnitsRule,
    [noRawFontWeightValuesRuleName]: noRawFontWeightValuesRule,
    [noReactFcComponentsRuleName]: noReactFcComponentsRule,
    [noReactNamespaceTypeImportsRuleName]: noReactNamespaceTypeImportsRule,
    [recipeExportNameMatchesFileRuleName]: recipeExportNameMatchesFileRule,
    [recipeJsxNameMatchesComponentRuleName]: recipeJsxNameMatchesComponentRule,
  },
};

export default cetecPlugin;
