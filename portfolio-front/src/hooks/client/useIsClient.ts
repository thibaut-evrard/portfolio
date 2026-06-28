import { useState, useEffect } from 'react';

export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    function callback() {
      setIsClient(true);
    }
    callback();
  }, []);
  return isClient;
};
