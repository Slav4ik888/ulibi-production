import { MutableRefObject, useEffect, useRef } from 'react'

interface Props {
  triggerRef : MutableRefObject<HTMLElement>
  wrapperRef : MutableRefObject<HTMLElement>
  callback?  : () => void
}

export const useInfiniteScroll = ({ triggerRef, wrapperRef, callback }: Props) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const
      wrapperElement = wrapperRef.current,
      triggerElement = triggerRef.current;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0
      }

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          // console.log('intersected');
          callback();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer?.unobserve(triggerElement);
      }
    }
  }, [wrapperRef, triggerRef, callback]);
}
