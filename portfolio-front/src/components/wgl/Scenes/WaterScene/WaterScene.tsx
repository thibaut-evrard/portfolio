import FluidSimulationMaterial from "../../Materials/FluidSimulationMaterial/FluidSimulationMaterial";

const WaterScene = () => {
  return (
    <>
      <mesh>
        <planeGeometry args={[3.2, 2, 1, 1]} />
        <FluidSimulationMaterial />
      </mesh>
    </>
  );
};

export default WaterScene;
