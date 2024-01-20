"use client";
import LinesScene from "@/components/wgl/Scenes/LinesScene/LinesScene";
import { Canvas } from "@react-three/fiber";

const Lines = () => {
    return (
        <Canvas>
            <LinesScene />
        </Canvas>
    );
};

export default Lines;
