import { defineRecipe } from "@pandacss/dev";

const toggleInputBase = {
    display: 'grid',
    gap: '8',
    gridTemplateColumns: '40px auto',
}

export const toggleInputRecipe = defineRecipe({
    className: 'toggle-input',
    jsx: ["ToggleInput"],
    base: toggleInputBase,
    variants: {

    }
})