import { HStack } from '@styled-system/jsx';
import { IconButton } from '~/components/IconButton';
import { Icon } from '~/components/Icon';
import { useTheme } from '~/contexts/ThemeContext';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  
  return (
    <HStack>
      <IconButton 
        variant="ghost" 
        onClick={() => setTheme('light')}
        {...(theme === 'light' && { 'data-selected': '' })}
        aria-label="Light theme"
      >
        <Icon name="sun-filled" />
      </IconButton>
      <IconButton 
        variant="ghost"
        onClick={() => setTheme('dark')}
        {...(theme === 'dark' && { 'data-selected': '' })}
        aria-label="Dark theme"
      >
        <Icon name="moon-filled" />
      </IconButton>
      <IconButton 
        variant="ghost"
        onClick={() => setTheme('win95')}
        {...(theme === 'win95' && { 'data-selected': '' })}
        aria-label="Windows 95 theme"
      >
        <Icon name="windows" />
      </IconButton>
    </HStack>
  );
} 