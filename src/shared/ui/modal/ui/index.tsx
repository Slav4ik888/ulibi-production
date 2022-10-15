import { useTheme } from 'app/providers/theme';
import React, { FC, ReactNode, useEffect, useRef, useState, useCallback } from 'react';
import { cn } from 'shared/lib';
import { Portal } from 'shared/ui';
import s from './index.module.scss';



interface Props {
  className? : string
  isOpen     : boolean
  children   : ReactNode
  onClose?   : () => void
}

const ANIMATION_DELAY = 300;


export const Modal: FC<Props> = ({ className, isOpen, children, onClose }) => {
  const
    [isClosing, setIsClosing] = useState(false),
    timerRef = useRef<ReturnType<typeof setTimeout>>(),
    { theme } = useTheme()

  const handlerContentClick = (e: React.MouseEvent) => e.stopPropagation();

  const handlerClose = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);


  const handlerKeyDown = useCallback((e: KeyboardEvent) => e.key === 'Escape'
    && handlerClose(), [handlerClose]);


  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', (e) => handlerKeyDown(e))
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', handlerKeyDown)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const mods: Record<string, boolean> = {
    [s.opened]    : isOpen,
    [s.isClosing] : isClosing,
    [s[theme]]    : true
  };


  return (
    <Portal>
      <div className={cn(s.root, mods, [className])}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div
          className = {s.overlay}
          role      = 'button'
          tabIndex  = {0}
          onClick   = {handlerClose}
        >
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <div
            className = {s.content}
            role      = 'button'
            tabIndex  = {0}
            onClick   = {handlerContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

Modal.defaultProps = {
  className : '',
  onClose   : () => {}
};
