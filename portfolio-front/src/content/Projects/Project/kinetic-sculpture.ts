import { IProjectContent } from '../projects.types';

const INTRO_TEXT = `# A kinetic sculpture designed to showcase bp's pivot from the oil industry to a more global energy industry.`;
const ROLE_TEXT = `
## Role
My main role on this project was to implement the front-end of the exprerience.
The most iteresting part of this work for me was designing a process that allowed designers to create animation files that could then be translated into visual output for the kinetic installation.
The process I designed was based on exporting low resolution 16bit textures that would then be processed and converted in data files consumable by the installation hardware.
`;

function assetPath(src: string) {
  return `/projects/kinetic-sculpture/${src}`;
}

export const kineticSculpture: IProjectContent = {
  slug: 'kinetic-sculpture',
  title: 'Energy Kinetic Sculpture',
  year: '2023',
  content: [
    {
      type: 'text',
      text: INTRO_TEXT,
    },
    {
      type: 'video',
      src: assetPath('chapter.webm'),
      autoplay: true,
      controls: true,
      size: 'l',
    },
    {
      type: 'text',
      text: ROLE_TEXT,
    },
    {
      type: 'image',
      src: assetPath('process.png'),
      alt: 'process diagram',
    },
    {
      type: 'video',
      src: assetPath('result.webm'),
      autoplay: true,
      size: 'l',
    },
    {
      type: 'video',
      src: assetPath('prototype.webm'),
      autoplay: true,
      size: 's',
    },
    {
      type: 'image',
      src: assetPath('maintenance.jpg'),
      alt: 'Man lying on the floor repairing large kinetic sculpture',
      size: 'm-l',
    },
    {
      type: 'image',
      src: assetPath('machine.jpg'),
      alt: 'Large kinetic sculpture',
      size: 'l',
    },
  ],
  thumbnail: assetPath('thumbnail.jpg'),
};
