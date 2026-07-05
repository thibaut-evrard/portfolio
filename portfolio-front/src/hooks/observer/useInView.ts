import { RefObject, useEffect, useState } from 'react';

export type InViewProps =
  [(value: boolean) => void, object] | [(value: boolean) => void];

export function useInView(
  elementRef: RefObject<HTMLElement | null>,
  props = {} as InViewProps
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;
    const observer = new IntersectionObserver(
      (e) => {
        e.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      {
        rootMargin: '10px',
        threshold: 0,
        ...props,
      }
    );
    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, props]);

  return inView;
}
