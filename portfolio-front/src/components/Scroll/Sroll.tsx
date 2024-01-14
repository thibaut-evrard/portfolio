import { useIsMobile } from '@/hooks/device/useIsMobile';
import { FC, PropsWithChildren } from 'react';
import SmoothScroll from '../SmoothScroll/SmoothScroll';
import MobileScroll from './MobileScroll/MobileScroll';

const Scroll: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useIsMobile();

  if (isMobile) return <MobileScroll>{children}</MobileScroll>;
  return <SmoothScroll>{children}</SmoothScroll>;
};

export default Scroll;
