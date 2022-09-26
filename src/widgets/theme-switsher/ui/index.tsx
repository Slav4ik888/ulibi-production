import { useTheme, Theme } from 'app/providers/theme';
import { FC } from 'react';
import { cn } from 'shared/lib';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import s from './index.module.scss';
import { Button } from 'shared/ui';



interface Props {
  className?: string;
}


export const ThemeSwitcher: FC<Props> = ({ className }) => {
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
};

ThemeSwitcher.defaultProps = {
  className: ''
}
