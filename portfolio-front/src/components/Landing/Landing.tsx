import { useScroll } from "framer-motion";
import { CanvasContainer, ScrollContainer } from "./Landing.styles";
import BubblesScene from "../wgl/Scenes/BubblesScene/BubblesScene";
import { useRef } from "react";
import ContentSlide from "./ContentSlide/ContentSlide";
import { Canvas } from "@react-three/fiber";
import { LOW_POWER_MODE } from "@/constants/performance";
import { LinearEncoding, NoToneMapping } from "three";

const GL_PARAMS = {
    alpha: false,
    outputEncoding: LinearEncoding,
    toneMapping: NoToneMapping,
};

const Landing = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollContainerRef,
        offset: ["start start", "end end"],
    });

    return (
        <ScrollContainer ref={scrollContainerRef}>
            <CanvasContainer>
                <ContentSlide progress={scrollYProgress} />
                <Canvas dpr={LOW_POWER_MODE ? 0.5 : 1} gl={GL_PARAMS}>
                    <BubblesScene progress={scrollYProgress} />
                </Canvas>
            </CanvasContainer>
        </ScrollContainer>
    );
};

export default Landing;
