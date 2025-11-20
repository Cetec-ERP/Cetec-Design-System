## [0.0.39-0] - 2025-11-17

### 🚀 Features

- New icons (#114)
- Formfield component (#94)
## [0.0.38-0] - 2025-10-28

### 🚀 Features

- Menu component (#102)
## [0.0.37-0] - 2025-10-24

### 🚀 Features

- Accessibility standards (#113)

### 🐛 Bug Fixes

- Clean up example page
## [0.0.36-0] - 2025-10-16

### 🚀 Features

- Tag component (#112)

### 🚜 Refactor

- Token changes in preparation for upcoming components (like Tags) (#111)
## [0.0.35-0] - 2025-09-29

### 🚀 Features

- Testworkflow (#107)
- Breadcrumbs component (#95)

### 🐛 Bug Fixes

- Auto config file

### ⚙️ Miscellaneous Tasks

- Test release workflow
- Update release.yml
- Change autorc
- Test release workflow (#108)
- Update release.yml (#109)
- Change autorc (#110)
## [0.0.34] - 2025-09-25

### 🚀 Features

- Auto setup
- Workflow
- More workflow
- Workflow
- Workflow
- Workflow
- Workflow
- Workflow
- Readme
- Auto setup (#106)

### 🐛 Bug Fixes

- Typo

### ⚙️ Miscellaneous Tasks

- Readme
## [0.0.33] - 2025-09-25

### 🚀 Features

- Fix Playroom React import issues and component rendering

### 🐛 Bug Fixes

- Tooltip recipe being applied

### ⚙️ Miscellaneous Tasks

- Resolve merge conflicts
- Workflow change
- Workflow
- Workflow
- Remove auto changelog
- Changelog???? (#105)
## [0.0.23] - 2025-06-16

### 🐛 Bug Fixes

- Pack
## [0.0.22] - 2025-06-13

### 🐛 Bug Fixes

- Icons
## [0.0.7] - 2025-06-04

### 🚀 Features

- Initial storybook setup
- In progress checkbox component
- Refactor all of the components
- Finish checkbox component
- Icon button modification to allow use of both figma structure and children based structure directly

### 🐛 Bug Fixes

- Removed redundant onclick event
- Removed changes for checkbox in globalStyle.ts
- Misc changes to package-lock.json
- Added border radius value for 3px or 0.188rem to tokens
- Converted box component to function component with forward ref capability in react
- Size prop added to viewBox prop for box
- Clean up checkbox component
- Merge conflicts
- Assigning splitProps return value type to classname as string and replaced explicit declaration in all the use cases
- Limited the length line to 80 character by modifing prettierrc file
- Resolved box component was giving viewbox property typescript error
- Size prop is used in viewbox value and explicit declaration for size value is removed
- Fill prop type casting done for consistant values
- Prettier changes for box component
- Added back variant and size value to button recipe
- Styling of button component handled using splitProps function
- Improved conditional spreading for button prop based on href prop
- Reverted changed of viewBox to the static values
- Css value modified for button variants
- LetterSpacing and lineHeights tokens fixed
- Button recipe fixes for lineHeight, letterSpacing are done
- Removed bg value from Primary button
- Changed default variant to standard for Button Component
- Removed letter-spacing value from button component recipe
- Removing redundant borderColor property from button recipe
- Removed default value for loading prop from Button component
- Reverted letterSpacing value to initial once
- Reverted changes for lineHeight from 24 to default
- Reverted back padding value from 4 to 3 in medium size button
- Removed default variant from button component as it is mentioned in the recipe
- Removed redundant lineHeight property
- Reverted values for lineHeight tokens
- Reverted back the spinner implementation
- Done the changes mentioned by shaun in the comments regarding padding
- Replaced alert with console.error message
- Changed name from trulyDisabled to isDisabled
- Replaced of conditionally adding display: 'none' property for conditional rendering based on buttonText value
- Svg css changes for small size button component
- Replaced text + icon component example from IconButton to Button component
- Allowing developer to add className using props to existing component
- Removed redundant type and created common buttonType
- Removed redundant IconButton with text
- Removed the javascipt validation for children of IconButton component
- Removed className prop from iconbutton component as well
- Name changed from customeClassName to customeClassName
- Changed gap ButtonContent gap 2 to 4
- Removed className prop from button component
- Text component modifications for compoundVariants and doing changes to the relevant components
- Recipe changes for text.ts file
- Optimized text component to remove rendunt props
- Default prop value removal from Text component
- Added display type in family variant of textVariant and added remaining sizes for body and mono family
- CompoundVariant replaced with textStyles, weight and size props are reintroduced and redundant code removal from baseStyles
- Misc changes based on new text variant changes
- Removed redundant object spreading
- Color tokens comprised of other tokens are now working properly
- Spinner component changes
- Removed redundant props from SpinnerProps
- Removed redundant spinnerStyles.ts file
- Typescript and eslint error resolved
- Removed redundant variants and defaultVariants value from defineSlotRecipe functions
- Correction in comments
- Removed the children prop in Checkbox.tsx
- Removed children prop from the checkbox component
- Removed redundant error and indeterminate props from the Checkbox.tsx component
- Opacity config value added and replaced at existing pages
- Checkbox related changes in recipes are implemented
- Changed color scheme upon error
- Changes in checkbox component based on new props
- Added icon for checkbox focus instead of outline css
- Changed error value from status.error.default to error.default
- Reverted changes for opacity
- Checkbox error state. add: examples of checkbox and checkboxinput.

### 💼 Other

- Checkbox component with recipes added to the design system

### 🚜 Refactor

- Replaced inbuilt splitCssProps with  splitProps utils function
- Button component code refactoring
- IconButton component
