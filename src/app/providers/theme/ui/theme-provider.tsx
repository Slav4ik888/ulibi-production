import { FC, useMemo, useState } from 'react';
import { ThemeContext, Theme } from '../lib/context';
import * as LS from 'shared/lib';


const defaultTheme = LS.getTheme() as Theme || Theme.LIGHT;

interface Props {
  initial?: Theme;
}

export const ThemeProvider: FC<Props> = ({ initial, children }) => {
  const
    [theme, setTheme] = useState<Theme>(() => initial || defaultTheme),
    defaultProps = useMemo(() => {
      document.body.className = theme;
      return { theme, setTheme }
    }, [theme]);


  return (
    <ThemeContext.Provider value={defaultProps}>
      {
        children
      }
    </ThemeContext.Provider>
  )
};

ThemeProvider.defaultProps = {
  initial: null
}
