import { GroupProps } from '@react-three/fiber';

export interface ILightballMesh extends GroupProps {
  lightProps?: {
    color?: string;
    intensity?: number;
    distance?: number;
    decay?: number;
  };
}
