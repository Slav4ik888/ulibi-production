import { FC, useMemo, useReducer, useState } from 'react';
import { ThemeContext, Theme } from "./context";
import * as LS from '../utils/local-storage';


const defaultTheme = LS.getTheme() as Theme || Theme.LIGHT;


export const ThemeProvider: FC = ({ children }) => {
  const
    [theme, setTheme] = useState<Theme>(defaultTheme),
    defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  
  return (
    <ThemeContext.Provider value={defaultProps}>
      {
        children
      }
    </ThemeContext.Provider>
  )
};
