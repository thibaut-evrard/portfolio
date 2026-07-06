import { IProjectContent } from '../projects.types';

const INTRO_TEXT = `## A kinetic sculpture designed to showcase efforts to pivot away from oil into a more diversified conception of energy.`;
const ROLE_TEXT = `
## Role: Kietic software / Frontend implementation

My biggest impact on this project was to design a set of tool and processes allowing designers to create animations that could be processed by the kinetic sculpture.

I ended up creating a script that transformed png sequences into JSON Data. Designers would export a PNG sequence for colours and a 16bit height map sequence, my script then pixelated the frames and extracted the image data to generate arrays. These arrays would then be transformed into buffers and sent to the microcontroller driver to action the kinetic part of the sculpture.
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
