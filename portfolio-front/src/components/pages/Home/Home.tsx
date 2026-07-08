'use client';

import Landing from '@/components/Ecosystems/Landing/Landing';
import Projects from '@/components/Ecosystems/Projects/Projects';
import { AppContext } from '@/context/AppContext';
import { useContext, useEffect, useState } from 'react';

const Home = () => {
  const context = useContext(AppContext);
  const [isFirstLoad, setIsFirstLoad] = useState(false);

  useEffect(() => {
    function setFirstLoad() {
      setIsFirstLoad(true);
      context.completeFirstLoad();
    }

    if (context.firstLoad) {
      setFirstLoad();
    }
  }, []);

  return (
    <>
      {isFirstLoad && <Landing />}
      <Projects />
    </>
  );
};

export default Home;
