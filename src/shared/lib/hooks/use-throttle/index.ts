import { useCallback, useRef } from 'react';

export function useThrottle(callback: (...args: unknown[]) => void, delay: number) {
  const isThrottled = useRef(false);

  const throttledCallback = useCallback((...args) => {
    if (isThrottled.current) return;

    callback(args);
    isThrottled.current = true;
    setTimeout(() => {
      isThrottled.current = false
    }, delay);
  }, [callback, delay]);

  return throttledCallback
}

//
// USE
//
// const App = () => {
//   const callback = useCallback(() => console.log('Moving mouse'), []);

//   const throttleMouseMove = useThrottle(callback, 1000);

//   useEffect(() => {
//     document.addEventListener('mousemove', throttleMouseMove);

//     return () => document.removeEventListener('mousemove', throttleMouseMove);
//   }, []);

//   return (
//     <div>
//       <h1>App see to mouse move</h1>
//     </div>
//   )
// }
