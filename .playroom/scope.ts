import { useTheme } from '../src/contexts/ThemeContext';

export default function useScope() {
  return {
    theme: useTheme(),
  };
}