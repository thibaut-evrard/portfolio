import { ThreeElements } from '@react-three/fiber';
import {BufferGeometry} from 'three';

export type ILetter = ThreeElements['group'] & {
    geometry: BufferGeometry;
}
