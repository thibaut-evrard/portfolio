'use client';
import { PropsWithChildren, FC, useEffect, useRef, useState } from 'react';
import { ContentContainer, FakeScrollWrapper } from './SmoothScroll.styles';
import {
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame
} from 'framer-motion';
import { SmoothScrollContext } from './SmoothScroll.context';
import { useIsClient } from '@/hooks/client/useIsClient';
import { lerp } from 'three/src/math/MathUtils.js';

const SmoothScroll: FC<PropsWithChildren> = ({ children }) => {
  const isClient = useIsClient(); // returns true if fisrt render is done

  const [height, setHeight] = useState<number>(0);
  const [screensCount, setScreensCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  // scroll parameters
  const { scrollYProgress, scrollY } = useScroll();
  const smoothProgress = useMotionValue(0);
  const screensProgress = useTransform(smoothProgress, [0, 1], [0, -screensCount]);
  const translateY = useTransform(smoothProgress, [0, 1], [0, -height]);

  useAnimationFrame(() => {
    if (scrollY.get() === 0) scrollYProgress.set(0);
    smoothProgress.set(lerp(smoothProgress.get(), scrollYProgress.get(), 0.1));
  });

  const handleOnResize = () => {
    if (!ref.current) return;
    // re-calculate height
    const height = ref.current.offsetHeight - window.innerHeight;
    setHeight(ref.current.offsetHeight - window.innerHeight);
    setScreensCount(height / window.innerHeight);
  };

  useEffect(() => {
    // set initial position
    window.scrollTo(0, 0);
    handleOnResize();

    // resize events
    window.addEventListener('resize', handleOnResize);
    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  }, [isClient]);

  if (!isClient) return null;
  return (
    <SmoothScrollContext.Provider
      value={{ progress: translateY, screensProgress: screensProgress }}
    >
      <div style={{ height: height, minHeight: '200vh' }} />
      <FakeScrollWrapper>
        <ContentContainer ref={ref} style={{ translateY }}>
          {children}
        </ContentContainer>
      </FakeScrollWrapper>
    </SmoothScrollContext.Provider>
  );
};

export default SmoothScroll;
