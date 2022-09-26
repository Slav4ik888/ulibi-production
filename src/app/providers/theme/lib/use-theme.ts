import { useContext } from 'react';
import { Theme, ThemeContext } from './context';
import * as LS from 'shared/lib';


interface UseTheme {
  toggleTheme: () => void;
  theme: Theme;
}

export const useTheme = (): UseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    LS.setTheme(newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme }
};
