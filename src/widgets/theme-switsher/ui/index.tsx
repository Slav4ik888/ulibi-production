import { useTheme, Theme } from 'app/providers/theme';
import { memo } from 'react';
import { cn } from 'shared/lib';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import s from './index.module.scss';
import { Button } from 'shared/ui';



interface Props {
  className?: string;
}


export const ThemeSwitcher = memo(({ className }: Props) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={cn(s.root, {}, [className])}
      onClick={toggleTheme}
    >
      {
        theme === Theme.DARK
          ? <LightIcon />
          : <DarkIcon />
      }
    </Button>
  )
});
