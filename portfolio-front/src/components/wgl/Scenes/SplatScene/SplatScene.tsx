import { OrbitControls } from "@react-three/drei";
import { CustomSplat } from "./CustomSplat/CustomSplat";

const SplatScene = () => {
    return (
        <>
            <OrbitControls />
            <group rotation={[0, 1.4, 0]} position={[0, 0, -5]} scale={6}>
                <CustomSplat src="/wgl/splatScene/tibo.splat" />
            </group>
        </>
    );
};

export default SplatScene;
