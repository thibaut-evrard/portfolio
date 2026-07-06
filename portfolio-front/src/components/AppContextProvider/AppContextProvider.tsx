'use client';
import { AppContext } from '@/context/AppContext';
import { FC, PropsWithChildren, useState } from 'react';

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [firstLoad, setFirstLoad] = useState(true);

  function completeFirstLoad() {
    setFirstLoad(false);
  }

  return (
    <AppContext.Provider value={{ firstLoad, completeFirstLoad }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
