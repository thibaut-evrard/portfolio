import { Environment, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { content } from "./Scene.content";
import { useMouse } from "@/hooks/mouse/useMouse";
import { useRef } from "react";
import { EquirectangularReflectionMapping, Texture } from "three";
import { lerp } from "three/src/math/MathUtils.js";
import {
    ROTATION_INTENSITY,
    ROTATION_SPEED,
    HAT_SCALE,
} from "./Scene.constants";
import Simplex from "ts-perlin-simplex";
import { RGBELoader } from "three/examples/jsm/Addons.js";

const noise = new Simplex.SimplexNoise();

const Scene = () => {
    const envMap = useLoader(RGBELoader, "/wgl/common/hdr/env.hdr");
    envMap.mapping = EquirectangularReflectionMapping;

    const ref = useRef<any>();
    const gltf = useGLTF(content.hatSrc);
    const { geometry, material } = gltf.scene.children[0] as any;

    const { positionRef } = useMouse();

    const lookAtMouse = () => {
        if (!ref.current) return;
        const { x, y } = positionRef.current;
        const rotX = (y - 0.5) * ROTATION_INTENSITY.x;
        const rotY = (x - 0.5) * ROTATION_INTENSITY.y;

        ref.current.rotation.y = lerp(
            ref.current.rotation.y,
            rotY,
            ROTATION_SPEED,
        );
        ref.current.rotation.x = lerp(
            ref.current.rotation.x,
            rotX,
            ROTATION_SPEED,
        );
    };

    const hover = (time: number) => {
        if (!ref.current) return;
        const y = noise.noise(0.5, time * 0.2) * 0.2;
        ref.current.position.y = y;
    };

    useFrame(({ clock }) => {
        if (!ref.current) return;
        lookAtMouse();
        hover(clock.elapsedTime);
    });

    if (!gltf) return null;
    return (
        <>
            <Environment files={"/wgl/common/hdr/env.hdr"} />
            {gltf && (
                <group
                    scale={HAT_SCALE}
                    rotation={[0.2, 0, 0]}
                    position={[0, -0.5, 0]}
                >
                    <mesh ref={ref}>
                        <bufferGeometry {...geometry} attach="geometry" />
                        <meshStandardMaterial
                            roughness={0.8}
                            map={material.map as Texture}
                            attach="material"
                        />
                    </mesh>
                </group>
            )}
        </>
    );
};

export default Scene;
