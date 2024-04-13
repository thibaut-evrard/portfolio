"use client";

import Experiments from "@/components/Ecosystems/Experiments/Experiments";
import Landing from "@/components/Ecosystems/Landing/Landing";
import Projects from "@/components/Ecosystems/Projects/Projects";

const Home = () => {
    return (
        <>
            <Landing />
            <Projects />
            <Experiments />
        </>
    );
};

export default Home;
