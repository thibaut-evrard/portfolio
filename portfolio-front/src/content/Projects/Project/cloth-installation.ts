import { IProjectContent } from '../projects.types';

const INTRO_TEXT = `## An ambient interactive installation onn the Vuse Store fascia in the Edmonton mall (Canada)

The brief on this one was simple. Take a look at our brand guidelines, ignore them completely and make something cool.

After research and experimentation, we landed on an ambient cloth sculpture that has a life of its own but that passers-by can affect through movement.
`;

const TECH_APPROACH_TEXT = `
## Technological approach
My main challenge on this project was to create a seemingly living object that would be affected by the environment.
I ended up designing a system of adding forces to achieve the perfect balance between ambient movement and interactivity

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
  title: 'Vuse Fascia Interactive Installation',
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
