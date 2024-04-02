import { Environment, useEnvironment } from "@react-three/drei";
import BackgroundTexture from "src/components/wgl/BackgroundTexture/BackgroundTexture";
import { FC } from "react";
import Bubbles from "./Bubbles/Scene";
import PointerCamera from "./PointerCamera/PointerCamera";
import { IBubblesScene } from "./BubblesScene.types";
import { content } from "./BubblesScene.content";

const BubblesScene: FC<IBubblesScene> = ({ progress }) => {
    const envMap = useEnvironment({
        files: "env.hdr",
        path: "./wgl/common/hdr/",
    });

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
