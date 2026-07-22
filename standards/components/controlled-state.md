# Controlled State Standard

Interactive components are controlled-first by default, but dual-mode APIs are allowed where they match native form behavior or materially improve static-rendering compatibility.

## Hard Standards

1. Default API model is controlled state (`value/checked` + `onChange`) for value-owning widgets.
2. Native input wrappers and binary controls may expose both controlled and uncontrolled props (`checked` / `defaultChecked`, `value` / `defaultValue`).
3. Overlays and pickers must support controlled visibility (`open` + `onOpenChange`), and may also expose `defaultOpen` when that improves DX.
4. Uncontrolled behavior is first-class when it matches native HTML semantics or helps a static page work without hydration. It is not automatically a transitional escape hatch.
5. Value-owning components should emit domain values from `onChange`; emit `null` only for intentional clear.

## Hard With Exceptions

Controlled-first can opt out for documented integration scenarios (example: using menu UI while delegating behavior to third-party control systems).

## Scope Notes

- Native input wrappers (`Checkbox`, `Radio`, `Toggle`) may emit DOM events by design and should respect native checked state for visuals.
- Grouped selection patterns should use a shared group context (`RadioGroup`, `ChipGroup`) instead of pushing selection state into generic field context.
- Action components (`MenuItem`) may expose click/action events instead of domain value payloads.
