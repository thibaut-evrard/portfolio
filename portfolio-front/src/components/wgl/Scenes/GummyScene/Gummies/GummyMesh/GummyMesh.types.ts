import { BufferGeometry, MeshStandardMaterial, Texture } from 'three';

export interface IGummyMesh {
  material: MeshStandardMaterial;
  geometry: BufferGeometry;
  coreColor?: string;
  color?: string;
  bumpMap?: Texture;
  position: [number, number, number];
}
