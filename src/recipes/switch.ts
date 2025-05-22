import { defineSlotRecipe } from "@pandacss/dev";

const switchBase = {
    container:{
        position:"relative",
        borderWidth: "2",
        borderStyle:"solid",
        borderColor: "slate.30",
        width: "40",
        height: "24",
        borderRadius: "24",
        _peerChecked: {
            bg: { base: "slate.90", _dark: "slate.0" }, // ✅ works now
          },
    },
    input:{
        position: "absolute",
        opacity: 0,
        width: "40",
        height: "24",
        borderRadius: '24',
        margin: "0",
        padding: "0",
        border: "none",
        zIndex: 0,
        cursor: "inherit",
        peer: "",
        "& ~ [name='circle']": {
          display: "inline-grid",
        top: -2,
        left: -2,
        position: 'absolute',
        },
        _checked: {
            "&::after":{
                position: 'absolute',
                content: '',
                width: '40',
                height: '24',
                borderRadius: '24',
                bg:{base: 'slate.90', _dark: 'slate.0'},
            },
          "& ~ [name='circle-check']": {
            display: "inline-grid",
            filter: {base: 'invert(100%)', _dark: 'invert(0%)'},
            // fill: { base: "slate.0", _dark: "slate.90" },
            top: -2,
            right: -2,
            position: 'absolute',
            
          },
          "& ~ [name='circle']": {
            display: "none",
            
          },
        },
        _disabled: {
          "& ~ svg": {
            opacity: 0.4,
            pointerEvents: 'none',
            cursor: 'none',
          },
          display: "inline-grid",
        },
        _error: {
          display: "inline-grid",
          "& ~ svg": {
            fill: "red.50",
          }
        },
        _focusVisible: {
          "& ~ svg": {
            outlineColor: { base: 'slate.80', _dark: 'slate.5' },
            outlineOffset: -3,
            borderRadius: 5,
            outlineWidth: 1,
            outlineStyle: 'solid',
          },
        },
    },
    indicator:{
        // placeContent: "center",
        display: 'none',
        width: 24,
        height: 24,
        "&:is([name='circle'])": {
          display: "inline-grid",
          fill: "slate.20",
        },
    }
}

export const switchRecipe = defineSlotRecipe({
    className: 'switchbox',
    jsx: ['switchbox'],
    slots: ['container', 'input', 'indicator'],
    base: switchBase,
})