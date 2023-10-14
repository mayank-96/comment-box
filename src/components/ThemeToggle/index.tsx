import styles from '@/styles/ThemeToggle.module.css';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ activeTheme, setActiveTheme }: any) => {
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  return (
    <button
      className={`${styles.toggleButton}`}
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type='button'
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      {activeTheme === 'dark' ? <Moon size={22} /> : <Sun size={22} />}
    </button>
  );
};

export default ThemeToggle;
