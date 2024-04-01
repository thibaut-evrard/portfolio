"use client";
import { CanvasContainer, ScrollContainer } from "./Water.styles";
import WaterScene from "@/components/wgl/Scenes/WaterScene/WaterScene";
import { Canvas } from "@react-three/fiber";

const Water = () => {
    return (
        <>
            <CanvasContainer>
                <Canvas linear camera={{ fov: 5, position: [0, 0, 10] }}>
                    <WaterScene />
                </Canvas>
            </CanvasContainer>
            <ScrollContainer>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
                <h1>test</h1>
            </ScrollContainer>
        </>
    );
};

export default Water;
