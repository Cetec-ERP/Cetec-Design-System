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

export type KbdSpecialSymbol = keyof typeof specialSymbols;
export type KbdValue = string;

export const isSpecialSymbol = (value: KbdValue): value is KbdSpecialSymbol =>
  value in specialSymbols;

export const getKbdLabel = (value: KbdValue) =>
  isSpecialSymbol(value) ? specialSymbols[value] : value;
