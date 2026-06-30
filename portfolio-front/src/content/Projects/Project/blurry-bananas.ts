import { IProjectContent } from '../projects.types';

const INTRO_TEXT = `## A swirling fruit salad that finds you attractive. Wherever you go, the fruits try and get closer...`;

const TECH_TEXT = `
I worked on this prototype to teach myself unity, shaders and particle systems.

## Technology
- Unity HDRP
- Kinect
- Custom Shaders
`;

function assetPath(src: string) {
  return `/projects/blurry-bananas/${src}`;
}

export const blurryBananas: IProjectContent = {
  slug: 'blurry-bananas',
  title: 'Blurry Bananas',
  year: '2023',
  content: [
    {
      type: 'text',
      text: INTRO_TEXT,
    },
    {
      type: 'video',
      src: assetPath('video.mp4'),
      autoplay: true,
      size: 'l',
    },
    {
      type: 'text',
      text: TECH_TEXT,
    },
    {
      type: 'video',
      src: assetPath('video2.mp4'),
      controls: true,
      size: 'm',
    },
    {
      type: 'video',
      src: assetPath('video3.mp4'),
      controls: true,
      size: 'm',
    },
  ],
  thumbnail: assetPath('thumbnail.jpg'),
};
