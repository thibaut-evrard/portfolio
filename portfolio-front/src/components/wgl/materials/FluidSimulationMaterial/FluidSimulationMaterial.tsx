import { useEffect, useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import { Color, DoubleSide, Mesh, ShaderMaterial } from "three";
import { useWaterSimCompute } from "./hooks/useWaterSimCompute";
import { useEnvironment } from "@react-three/drei";
import { useControls } from "leva";
import { BodyFluidShaderMaterial } from "./FluidShaderMaterial/FluidShaderMaterial";
import { useScrollParams } from "./hooks/useScrollParams";
import { useMouse } from "@/hooks/mouse/useMouse";

extend({ BodyFluidShaderMaterial });

const FluidSimulationMaterial = () => {
  const controls = useControls({
    attenuation: { value: 0.005, max: 0.1, min: 0.0 },
    waveSpeed: { value: 0.4, max: 0.7, min: 0.0 },
    sampleScale: { value: 1.0, max: 30.0, min: 1.0 },
    cursorScale: { value: 0.03, max: 1, min: 0.0 },
  });

  const meshRef = useRef<Mesh>(null);
  const environment = useEnvironment({ preset: "sunset" });
  const materialRef = useRef(null);
  const cursor = useMouse();
  const waterSim = useWaterSimCompute();
  const { scrollAccelerationDamped, scrollScalarDamped, scrollProgress } =
    useScrollParams();

  useFrame(() => {
    if (!materialRef.current) return;
    const pos = cursor.positionRef.current.clone();
    pos.y = 1 - pos.y;

    // update the cursor uniforms
    waterSim.updateUniforms({
      // cursor values
      cursorPosition: pos,
      cursorDirection: cursor.smoothDirectionRef.current,
      cursorClicked: true,
      // scroll values
      scrollScalar: scrollScalarDamped.current / 2,
      scrollAcceleration: scrollAccelerationDamped.current,
      scrollProgress: scrollProgress.current,
    });
    // run the compute layer
    waterSim.update();

    const material = materialRef.current as unknown as ShaderMaterial;
    material.uniforms.velocityMap.value = waterSim.computeTextureRef.current;

    if (!meshRef.current) return;
  });

  useEffect(() => {
    waterSim.updateUniforms({
      attenuation: controls.attenuation,
      waveSpeed: controls.waveSpeed,
      sampleScale: controls.sampleScale,
      cursorScale: controls.cursorScale,
    });
  }, [controls]);

  return (
    <bodyFluidShaderMaterial
      side={DoubleSide}
      key="material"
      ref={materialRef}
      displacementFactor={0}
      color={new Color('#000000')}
      envMap={environment}
      transparent
    />
  );
};

export default FluidSimulationMaterial;
