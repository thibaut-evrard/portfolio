'use client';

import Landing from '@/components/Landing/Landing';
import Projects from '@/components/Projects/Projects';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';

const Home = () => {
    return (
        <SmoothScroll>
            <Landing />
            <Projects />
        </SmoothScroll>
    );
    //return <Construction />;
};

export default Home;
