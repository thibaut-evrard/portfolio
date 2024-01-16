"use client";

import BubblesScene from "@/components/wgl/Scenes/BubblesScene/BubblesScene";
import { Canvas } from "@react-three/fiber";
import { useMotionValue } from "framer-motion";
import { LinearEncoding, NoToneMapping } from "three";

const GL_PARAMS = {
    alpha: false,
    outputEncoding: LinearEncoding,
    toneMapping: NoToneMapping,
};

const Bubbles = () => {
    const progress = useMotionValue(0);

    return (
        <Canvas dpr={1} gl={GL_PARAMS}>
            <BubblesScene progress={progress} />
        </Canvas>
    );
};

export default Bubbles;
