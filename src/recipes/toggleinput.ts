import { defineRecipe } from "@pandacss/dev";

const toggleInputBase = {
    display: 'flex',
    gap: '8',
}

export const toggleInputRecipe = defineRecipe({
    className: 'toggle-input',
    jsx: ["ToggleInput"],
    base: toggleInputBase,
    variants: {

    }
})