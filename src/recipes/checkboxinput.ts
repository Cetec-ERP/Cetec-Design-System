import { defineRecipe } from "@pandacss/dev";

const checkboxInputBase = {
    display: 'flex',
    gap: '4'
}

export const checkboxInputRecipe = defineRecipe({
    className: 'checkbox-input',
    jsx: ["CheckboxInput"],
    base: checkboxInputBase,
    variants: {

    }
})