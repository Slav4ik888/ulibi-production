import { StateSchema } from 'app/providers/store';
import { scrollRestoreActions, selectScrollByPath } from 'features/scroll-restore';
import { memo, MutableRefObject, ReactNode, useRef, UIEvent } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { cn } from 'shared/lib';
import { useAppDispatch, useInfiniteScroll, useInitialEffect } from 'shared/lib/hooks';
import { useThrottle } from 'shared/lib/hooks/use-throttle';
import s from './index.module.scss';



interface Props {
  className?   : string
  children     : ReactNode
  onScrollEnd? : () => void
}


export const PageWrapper = memo(({ className, children, onScrollEnd }: Props) => {
  const
    wrapperRef = useRef() as MutableRefObject<HTMLElement>, // This is the part on which the scroll hangs
    triggerRef = useRef() as MutableRefObject<HTMLElement>,
    dispatch = useAppDispatch(),
    { pathname } = useLocation(),
    scrollPosition = useSelector((state: StateSchema) => selectScrollByPath(state, pathname));


  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd && onScrollEnd
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollRestoreActions.setScrollPosition({
      path     : pathname,
      position : e.currentTarget?.scrollTop
    }));
  }, 400);


  return (
    <section
      ref       = {wrapperRef}
      className = {cn(s.root, {}, [className])}
      onScroll  = {onScroll}
    >
      {
        children
      }
      {/* @ts-ignore */}
      { onScrollEnd && <div className={s.trigger} ref={triggerRef} /> }
    </section>
  )
});
