'use client';
import Landing from '@/components/Landing/Landing';
import Projects from '@/components/Projects/Projects';
import {BLACK} from '@/constants/style';

const Home = () => {
    return (
        <div style={{backgroundColor: BLACK}}>
            <Landing />
            <Projects />
        </div>
    );
    //return <Construction />;
};

export default Home;
