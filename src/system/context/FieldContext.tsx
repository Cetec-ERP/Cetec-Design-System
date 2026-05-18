import { createContext, useContext } from 'react';

import type { FormFieldVariantProps } from '@styled-system/recipes';

export type FieldContextValue = {
  size?: FormFieldVariantProps['size'];
  error?: boolean;
  invalid?: boolean;
  disabled?: boolean;
};

export const FieldContext = createContext<FieldContextValue | null>(null);

export const useFieldContext = () => {
  return useContext(FieldContext);
};
