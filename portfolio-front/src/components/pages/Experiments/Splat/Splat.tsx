"use client";

import SplatScene from "@/components/wgl/Scenes/SplatScene/SplatScene";
import { Canvas } from "@react-three/fiber";

const PortraitSplat = () => {
    return (
        <Canvas>
            <SplatScene />
        </Canvas>
    );
};

export default PortraitSplat;
