import { IProjectContent } from '../projects.types';

const INTRO_TEXT = `# A Cloth simulation based interactive installation showcased in the Edmonton Mall.
Our brief was to create an interactive installation reactive to it's environment to be showcased on the Vuse Store facia in the Edmonton Mall.
Our creative solution was to create a cloth that has a life of its own but that gets affected by passers by. As if movement in space genenrated wind that affected the cloth.

`;

const TECH_APPROACH_TEXT = `
## Technological approach
My main challenge on this project was to create a seemingly living object that would be affected by the environment.
I ended up landing on a cloth simulation solution. I ended up applying 3 set of force fields to the cloth to make it interesting:

- Container forces to prevent the forces from escaping the canvas
- Ambient forces to keep a constant movement to the cloth
- Movement based forces to make the cloth respond to the outside world`;

const TECHNIQUES_TEXT = `
## Techniques used
- Vector force fields
- Noise fields
- Kinect user bone tracking
`;

const TOOLS_TEXT = `
## Tools used
- Unity HDRP
- Cloth system library
`;

function assetPath(src: string) {
  return `/projects/cloth-installation/${src}`;
}

export const clothInstallation: IProjectContent = {
  slug: 'cloth-installation',
  title: 'Edmonton Cloth installation',
  year: '2023',
  content: [
    {
      type: 'text',
      text: INTRO_TEXT,
    },
    {
      type: 'video',
      src: assetPath('cloth-2.webm'),
      autoplay: true,
      size: 'l',
    },
    {
      type: 'text',
      text: TECH_APPROACH_TEXT,
    },
    {
      type: 'image',
      src: assetPath('forces.webp'),
      alt: '3D view of a mesh representing a cloth',
      size: 'l',
    },
    {
      type: 'text',
      text: TECHNIQUES_TEXT,
      size: 'm',
    },
    {
      type: 'text',
      text: TOOLS_TEXT,
      size: 'm',
    },
    {
      type: 'video',
      src: assetPath('cloth.webm'),
      autoplay: true,
      size: 'l',
    },
    {
      type: 'image',
      src: assetPath('mesh.webp'),
      alt: '3D view of a mesh representing a cloth',
      size: 'l',
    },
  ],
  thumbnail: assetPath('thumbnail.webp'),
};
