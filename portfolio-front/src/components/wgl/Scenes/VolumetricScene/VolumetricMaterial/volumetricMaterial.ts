import { shaderMaterial } from "@react-three/drei";
import { vertex } from "./vertex";
import { fragment } from "./fragment";

export const VolumetricMaterial = shaderMaterial({}, vertex, fragment);
