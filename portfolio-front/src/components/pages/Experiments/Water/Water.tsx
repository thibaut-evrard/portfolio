"use client";
import {
    CanvasContainer,
    ScrollContainer,
    ScrollWrapper,
} from "./Water.styles";
import WaterScene from "@/components/wgl/Scenes/WaterScene/WaterScene";
import { Canvas } from "@react-three/fiber";
import { text } from "./Water.content";

const Water = () => {
    return (
        <>
            <CanvasContainer>
                <Canvas linear camera={{ fov: 5, position: [0, 0, 10] }}>
                    <WaterScene />
                </Canvas>
            </CanvasContainer>
            <ScrollContainer>
                <ScrollWrapper>
                    <span dangerouslySetInnerHTML={{ __html: text }} />
                </ScrollWrapper>
            </ScrollContainer>
        </>
    );
};

export default Water;
