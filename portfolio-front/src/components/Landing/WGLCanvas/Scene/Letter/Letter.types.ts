import {GroupProps} from '@react-three/fiber';
import {BufferGeometry, Group, Mesh} from 'three';

export interface ILetter extends GroupProps {
    geometry: BufferGeometry;
}
