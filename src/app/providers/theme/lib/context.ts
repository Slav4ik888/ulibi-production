import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_theme_light',
  DARK  = 'app_theme_dark'
}

export interface ThemeContextProps {
  theme?    : Theme;
  setTheme? : (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
