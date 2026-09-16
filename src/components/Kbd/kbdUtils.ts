const specialSymbols = {
  '⌘': 'command',
  '⌥': 'option',
  '⌃': 'control',
  '⇪': 'shift',
  '⎋': 'escape',
  '⌫': 'delete',
  '↩': 'return',
  '⇥': 'tab',
  '←': 'left',
  '→': 'right',
  '↑': 'up',
  '↓': 'down',
} as const;

/** A shortcut symbol with a built-in readable label. */
export type KbdSpecialSymbol = keyof typeof specialSymbols;

/** A visible key label accepted by `Kbd`. */
export type KbdValue = string;

/** Returns whether a key label has a built-in readable symbol name. */
export const isSpecialSymbol = (value: KbdValue): value is KbdSpecialSymbol =>
  value in specialSymbols;

/** Returns the readable name for a known symbol, or the original key label. */
export const getKbdLabel = (value: KbdValue) =>
  isSpecialSymbol(value) ? specialSymbols[value] : value;
