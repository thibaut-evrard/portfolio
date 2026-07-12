'use client';
import { AppContext } from '@/context/AppContext';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [loaded, setLoaded] = useState(false);

  function completeFirstLoad() {
    setFirstLoad(false);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoaded(true);
  }, []);

  return (
    <AppContext.Provider value={{ firstLoad, completeFirstLoad }}>
      {loaded && children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
