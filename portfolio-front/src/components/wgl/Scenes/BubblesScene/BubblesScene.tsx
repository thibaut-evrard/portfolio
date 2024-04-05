import { Environment } from "@react-three/drei";
import BackgroundTexture from "src/components/wgl/BackgroundTexture/BackgroundTexture";
import { FC } from "react";
import Bubbles from "./Bubbles/Scene";
import PointerCamera from "./PointerCamera/PointerCamera";
import { IBubblesScene } from "./BubblesScene.types";
import { content } from "./BubblesScene.content";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three/examples/jsm/Addons.js";
import { EquirectangularReflectionMapping } from "three";
import { COLORS } from "@/constants/style";

const BubblesScene: FC<IBubblesScene> = ({ progress }) => {
    const envMap = useLoader(RGBELoader, content.hdri);
    envMap.mapping = EquirectangularReflectionMapping;

    return (
        <>
            <BackgroundTexture path={content.background} />
            <Environment map={envMap} />
            <PointerCamera progress={progress} />
            <Bubbles text3d={content.model} />
        </>
    );
};

export default BubblesScene;
