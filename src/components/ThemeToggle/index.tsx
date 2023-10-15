import { Sun, Moon } from 'lucide-react';
import { Button, Icon } from '@/components/primitives';

const ThemeToggle = ({ activeTheme, setActiveTheme }: any) => {
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  return (
    <Button
      onClick={() => setActiveTheme(inactiveTheme)}
      style={{
        position: 'absolute',
        top: 30,
        right: 30,
        outline: 'none',
        border: 'none',
        padding: 8,
        borderRadius: 4,
        cursor: 'pointer',
      }}
    >
      {activeTheme === 'dark' ? (
        <Icon as={Moon} size={22} />
      ) : (
        <Icon as={Sun} size={22} />
      )}
    </Button>
  );
};

export default ThemeToggle;
