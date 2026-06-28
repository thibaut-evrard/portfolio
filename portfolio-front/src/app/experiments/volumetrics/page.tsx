"use client";
import VolumetricScene from "@/components/wgl/Scenes/VolumetricScene/VolumetricScene";
import { Canvas } from "@react-three/fiber";

const VolumetricsPage = () => {
    return (
        <Canvas>
            <VolumetricScene />
        </Canvas>
    );
};

export default VolumetricsPage;
