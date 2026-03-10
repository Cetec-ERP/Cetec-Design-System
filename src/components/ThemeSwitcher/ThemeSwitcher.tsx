import { IconButton } from '~/components/IconButton';
import { useTheme } from '~/system/context';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton
      variant="ghost"
      altText={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      onClick={toggleTheme}
      iconName={theme === 'light' ? 'moon' : 'sun'}
    />
  );
};
