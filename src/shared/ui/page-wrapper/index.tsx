import { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { cn } from 'shared/lib';
import { useInfiniteScroll } from 'shared/lib/hooks';
import s from './index.module.scss';



interface Props {
  className?   : string
  children     : ReactNode
  onScrollEnd? : () => void
}


export const PageWrapper = memo(({ className, children, onScrollEnd }: Props) => {
  const
    wrapperRef = useRef() as MutableRefObject<HTMLElement>,
    triggerRef = useRef() as MutableRefObject<HTMLElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd && onScrollEnd
  });

  return (
    <section
      ref       = {wrapperRef}
      className = {cn(s.root, {}, [className])}
    >
      {
        children
      }
      {/* @ts-ignore */}
      <div ref={triggerRef} />
    </section>
  )
});
