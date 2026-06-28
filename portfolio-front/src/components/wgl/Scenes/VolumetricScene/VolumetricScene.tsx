import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import { Mesh } from "three";
import { VolumetricMaterial } from "./VolumetricMaterial/volumetricMaterial";

const VolumetricScene = () => {
    const { nodes } = useGLTF("/wgl/volumetricsScene/volume-test.glb");
    const volume = nodes.volume as Mesh;
    const material = useMemo(() => {
        const material = new VolumetricMaterial();
        material.transparent = true;
        return material;
    }, []);

    return (
        <>
            <OrbitControls />
            <Environment files={"/wgl/common/hdr/env.hdr"} background />
            <group>
                <primitive object={nodes.cube} />
                <mesh
                    geometry={volume.geometry}
                    position={volume.position}
                    material={material}
                ></mesh>
            </group>
        </>
    );
};

export default VolumetricScene;
