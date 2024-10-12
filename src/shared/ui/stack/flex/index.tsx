import { DetailedHTMLProps, FC, HTMLAttributes, memo, ReactNode } from 'react';
import { cn, Mods } from 'shared/lib';
import s from './index.module.scss';



export type FlexJustify   = 'start' | 'center' | 'end' | 'between'
export type FlexAlign     = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexGap       = '4' | '8' | '16' | '24' | '32'

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const justifyClasses: Record<FlexJustify, string> = {
  start   : s.justifyStart,
  center  : s.justifyCenter,
  end     : s.justifyEnd,
  between : s.justifyBetween
};

const alignClasses: Record<FlexAlign, string> = {
  start   : s.alignStart,
  center  : s.alignCenter,
  end     : s.alignEnd
};

const directionClasses: Record<FlexDirection, string> = {
  row    : s.directionRow,
  column : s.directionColumn
};

const gapClasses: Record<FlexGap, string> = {
  4  : s.gap4,
  8  : s.gap8,
  16 : s.gap16,
  24 : s.gap24,
  32 : s.gap32
};


export interface FlexProps extends DivProps {
  className? : string
  children   : ReactNode
  justify?   : FlexJustify
  align?     : FlexAlign
  direction? : FlexDirection
  gap?       : FlexGap
  fullWidth? : boolean
}

// @ts-ignore
export const Flex: FC<FlexProps> = memo((props: FlexProps) => {
  const {
    className,
    children,
    justify   = 'start',
    align     = 'center',
    direction = 'row',
    fullWidth,
    gap
  } = props;

  const classes = [
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
    className
  ];

  const mods: Mods = {
    [s.fullWidth]: Boolean(fullWidth)
  };

  return (
    <div className={cn(s.flex, mods, classes)}>
      {children}
    </div>
  )
});
