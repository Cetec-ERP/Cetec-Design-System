import {
  RULE_NAME as avoidCompoundVariantsInRecipesRuleName,
  avoidCompoundVariantsInRecipesRule,
} from './rules/avoid-compound-variants-in-recipes.js';
import {
  RULE_NAME as noHardcodedDesignValuesInRecipesRuleName,
  noHardcodedDesignValuesInRecipesRule,
} from './rules/no-hardcoded-design-values-in-recipes.js';
import {
  RULE_NAME as noStaticCssInRecipeFilesRuleName,
  noStaticCssInRecipeFilesRule,
} from './rules/no-static-css-in-recipe-files.js';
import {
  RULE_NAME as noInlineStylePropRuleName,
  noInlineStylePropRule,
} from './rules/no-inline-style-prop.js';
import {
  RULE_NAME as noImportantRuleName,
  noImportantRule,
} from './rules/no-important.js';
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
import {
  RULE_NAME as useCorrectConditionalVariantTypeRuleName,
  useCorrectConditionalVariantTypeRule,
} from './rules/use-correct-conditional-variant-type.js';

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
    [avoidCompoundVariantsInRecipesRuleName]:
      avoidCompoundVariantsInRecipesRule,
    [discourageCssVariableStylingRuleName]: discourageCssVariableStylingRule,
    [noClassnameCssCallRuleName]: noClassnameCssCallRule,
    [noHardcodedDesignValuesInRecipesRuleName]:
      noHardcodedDesignValuesInRecipesRule,
    [noImportantRuleName]: noImportantRule,
    [noInlineStylePropRuleName]: noInlineStylePropRule,
    [noPixelUnitsRuleName]: noPixelUnitsRule,
    [noRawFontWeightValuesRuleName]: noRawFontWeightValuesRule,
    [noReactFcComponentsRuleName]: noReactFcComponentsRule,
    [noReactNamespaceTypeImportsRuleName]: noReactNamespaceTypeImportsRule,
    [noStaticCssInRecipeFilesRuleName]: noStaticCssInRecipeFilesRule,
    [recipeExportNameMatchesFileRuleName]: recipeExportNameMatchesFileRule,
    [recipeJsxNameMatchesComponentRuleName]: recipeJsxNameMatchesComponentRule,
    [useCorrectConditionalVariantTypeRuleName]:
      useCorrectConditionalVariantTypeRule,
  },
};

export default cetecPlugin;
