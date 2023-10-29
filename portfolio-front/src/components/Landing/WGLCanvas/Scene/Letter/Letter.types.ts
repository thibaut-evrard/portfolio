import {GroupProps} from '@react-three/fiber';
import {BufferGeometry} from 'three';

export interface ILetter extends GroupProps {
    geometry: BufferGeometry;
}
