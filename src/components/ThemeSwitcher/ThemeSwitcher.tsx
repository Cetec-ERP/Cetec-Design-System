import { IconButton } from '~/components/IconButton';
import { useTheme } from '~/system/context';
import { dsComponent } from '~/utils/dsComponent';

/**
 * Renders an icon-only control that toggles the nearest theme provider between
 * light and dark themes.
 *
 * It obtains state from `useTheme`, so it must be rendered below the design
 * system's theme provider. The accessible label always describes the theme that
 * will be selected next.
 *
 * @example
 * ```tsx
 * <ThemeSwitcher />
 * ```
 */
export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton
      {...dsComponent('ThemeSwitcher')}
      variant="ghost"
      altText={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      onClick={toggleTheme}
      iconName={theme === 'light' ? 'moon' : 'sun'}
    />
  );
};
