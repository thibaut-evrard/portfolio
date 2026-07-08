import { IProjectContent } from '../projects.types';

function assetPath(src: string) {
  return `/projects/oyster-disaster/${src}`;
}
const INTRO_TEXT = `## Experimental Art / Design Duo with Songyee Kim
Oyster Disaster serves as an experimental playground where Songyee Kim and I bring our wildest, most unconventional ideas to life as a creative duo.
We create ideas and concepts together, once we are happy with the vision and direction, Song Jumps on the design tools and I take care of the Tech. Together, we blend art, technology, and design to push boundaries and explore new mediums without constraints.
`;

const PROCESS_TEXT = `
Our experimental work taken many diverse forms. We have brought projects to life through web development and physical merchandise, dabbled in food-related concepts, and built immersive experiences that bring the physical and digital worlds together. 
One of our biggest projects was creating an augmented exhibition in collaboration with artist Lydia Chan.
`;

export const oysterDisaster: IProjectContent = {
  slug: 'oyster-disaster',
  title: 'Oyster Disaster',
  year: 'Since 2020',
  content: [
    { type: 'text', text: INTRO_TEXT },
    {
      type: 'video',
      src: assetPath('video.mp4'),
      autoplay: true,
      muted: true,
      size: 's',
    },
    {
      type: 'video',
      src: assetPath('video1.mp4'),
      autoplay: true,
      muted: true,
      size: 's',
    },
    {
      type: 'video',
      src: assetPath('video3.mp4'),
      autoplay: true,
      muted: true,
      size: 's',
    },
    {
      type: 'image',
      src: assetPath('landscape.jpg'),
      alt: '3d render of abstract plants in surrealist landscape',
      size: 's',
    },
    {
      type: 'image',
      src: assetPath('water.jpg'),
      alt: 'A woman with a 3D Rendered mask bathing in a pond',
      size: 's',
    },
    {
      type: 'image',
      src: assetPath('eyes.jpg'),
      alt: '3d render of multi eyed blob on floral backgound',
      size: 's',
    },
    { type: 'text', text: PROCESS_TEXT },
    {
      type: 'image',
      src: assetPath('t-shirt.jpg'),
      alt: 'Print t-shirt on sofa',
      size: 'm',
    },
    {
      type: 'image',
      src: assetPath('stickers-1.jpg'),
      alt: 'Stickers on coffee table',
      size: 'm',
    },
    {
      type: 'video',
      src: assetPath('jello.webm'),
      autoplay: true,
      muted: true,
      size: 'l',
    },
  ],
  thumbnail: assetPath('thumbnail.jpeg'),
};
