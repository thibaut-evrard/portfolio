import { SmoothScrollContext } from '@/components/SmoothScroll/SmoothScroll.context';
import { useMotionValue, useAnimationFrame } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';

const MobileScroll: FC<PropsWithChildren> = ({ children }) => {
  const progress = useMotionValue(0);
  const screensProgress = useMotionValue(0);

  useAnimationFrame(() => {
    if (!window) return;
    const scrollY = window.scrollY;
    const height = window.innerHeight;
    const screensCount = height / window.innerHeight;

    progress.set(scrollY / height);
    screensProgress.set(-(scrollY / height) * screensCount);

    console.log(screensProgress.get());
  });

  return (
    <SmoothScrollContext.Provider
      value={{ progress: progress, screensProgress: screensProgress }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
};

export default MobileScroll;
