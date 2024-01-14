'use client';

import Landing from '@/components/Landing/Landing';
import Projects from '@/components/Projects/Projects';
import Scroll from '@/components/Scroll/Sroll';

const Home = () => {
  return (
    <Scroll>
      <Landing />
      <Projects />
    </Scroll>
  );
};

export default Home;
