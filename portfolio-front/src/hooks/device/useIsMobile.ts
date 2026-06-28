import { MOBILE_WIDTH } from '@/constants/devices';
import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const update = () => {
    setIsMobile(window.innerWidth <= MOBILE_WIDTH);
  };

  useEffect(() => {
    function callback() {
      update();
    }

    callback();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return isMobile;
};
