import { IconButton } from '~/components/IconButton';
import { Icon } from '~/components/Icon';
import { useTheme } from '~/contexts/ThemeContext';

export const ThemeSwitcher: React.FC = ({}) => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton
      variant="ghost"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <Icon name={theme === 'light' ? 'moon' : 'sun'} />
    </IconButton>
  );
};
