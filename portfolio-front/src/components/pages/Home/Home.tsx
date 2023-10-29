'use client';
import Landing from '@/components/Landing/Landing';
import {TestSection} from '@/components/TestSection/TestSection.styles';

const Home = () => {
    return (
        <>
            <Landing />
            <TestSection />
            <TestSection />
        </>
    );
    //return <Construction />;
};

export default Home;
