import { Theme } from '../hooks/useTheme';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  className?: string;
}

const ThemeToggle = ({ theme, onToggle, className }: ThemeToggleProps) => (
  <button
    type="button"
    className={className}
    onClick={onToggle}
    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
  >
    {theme === 'dark' ? 'Light' : 'Dark'}
  </button>
);

export default ThemeToggle;
