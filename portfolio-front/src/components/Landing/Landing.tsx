import { useScroll } from "framer-motion";
import { CanvasContainer, ScrollContainer } from "./Landing.styles";
import WGLCanvas from "./WGLCanvas/WGLCanvas";
import { useRef } from "react";
import ContentSlide from "./ContentSlide/ContentSlide";

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
                <WGLCanvas progress={scrollYProgress} />
            </CanvasContainer>
        </ScrollContainer>
    );
};

export default Landing;
