import { IProjectContent } from '../projects.types';

const INTRO_TEXT = `
## Ai Powered football card generator
`;

const PROCESS = `
## Process
In this experience, the user first takes a selfie, A template is then selected for them and a specialised model swaps the face on the template with the user's face.
Finally, the output image is composed in a canvas to transform the output image into a football card that is then returned to the user.
`;

function assetPath(src: string) {
  return `/projects/foot-boo/${src}`;
}

export const footBoo: IProjectContent = {
  slug: 'foot-boo',
  title: 'Foot.boo',
  year: '2024',
  content: [
    {
      type: 'text',
      text: INTRO_TEXT,
    },
    {
      type: 'video',
      src: assetPath('intro.webm'),
      autoplay: true,
    },
    {
      type: 'image',
      src: assetPath('screen-4.webp'),
      size: 's',
      alt: '',
    },
    {
      type: 'image',
      src: assetPath('screen-2.webp'),
      size: 's',
      alt: '',
    },
    {
      type: 'image',
      src: assetPath('screen-1.webp'),
      size: 's',
      alt: '',
    },
    {
      type: 'text',
      text: PROCESS,
    },
    {
      type: 'image',
      src: assetPath('face-swap.jpg'),
      size: 'l',
      alt: '',
    },
    {
      type: 'video',
      src: assetPath('reveal.webm'),
      autoplay: true,
    },
  ],
  thumbnail: assetPath('thumbnail.webp'),
};
