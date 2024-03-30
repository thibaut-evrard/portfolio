'use client';
import WaterScene from "@/components/wgl/Scenes/WaterScene/WaterScene";
import { Canvas } from "@react-three/fiber";

const Water = () => {
    return (
        <Canvas dpr={2} linear camera={{ fov: 10, position: [0, 0, 10] }}>
            <WaterScene />
        </Canvas>
    );
};

export default Water;
