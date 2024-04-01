import FluidSimulationMaterial from "../../mat/FluidSimulationMaterial/FluidSimulationMaterial";

const WaterScene = () => {
    return (
        <>
            <mesh>
                <planeGeometry args={[1.6, 1, 1, 1]} />
                <FluidSimulationMaterial />
            </mesh>
        </>
    );
};

export default WaterScene;
