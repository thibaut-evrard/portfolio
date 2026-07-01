import { IProjectContent } from '../projects.types';

function assetPath(src: string) {
  return `/projects/dms-icon-wall/${src}`;
}
const INTRO_COPY = `
# An in-store interactive experience for Dr Martens in Carnaby Street. Users place a boot on the stand and can explore features, get style inspiration and maintenance tips.
`;

const FEATURES_COPY = `
## Core features
- NFC driven interaction
- Interactive kiosk
- Social API Itegration`;

const TECHNOLOGY_COPY = `
## Technology
- WebGL (Three Js)
- React
- Framer Motion`;

const ROLE_COPY = `
# Role
Leading the Frontend and WebGL development of the experience. 

I got to spend a lot of time finessing the WebGL scene: Optimising 3D assets using Blender, Animating scene objects and adding blur and particles systems to make the scene feel more alive.

I knew this project was going to run on a custom machine, I was able to go all in with the transitions and CSS animations to try and make the experience as engaging as possible.
`;

export const dmsIconWall: IProjectContent = {
  slug: 'dms-icon-wall',
  title: "DM's Icon Wall",
  year: '2021',
  content: [
    {
      type: 'text',
      text: INTRO_COPY,
      size: 'l',
    },
    {
      type: 'video',
      src: assetPath('idle.webm'),
      size: 's',
      autoplay: true,
      muted: true,
    },
    {
      type: 'video',
      src: assetPath('shoe.webm'),
      size: 's',
      autoplay: true,
      muted: true,
    },
    {
      type: 'video',
      src: assetPath('style.webm'),
      size: 's',
      autoplay: true,
      muted: true,
    },
    {
      type: 'text',
      text: ROLE_COPY,
      size: 'l',
    },
    {
      type: 'video',
      src: assetPath('showcase.mp4'),
      size: 'l',
      controls: true,
    },
    {
      type: 'text',
      text: FEATURES_COPY,
      size: 'm',
    },
    {
      type: 'text',
      text: TECHNOLOGY_COPY,
      size: 'm',
    },
    {
      type: 'image',
      src: assetPath('thumbnail.jpg'),
      alt: 'Woman holding a shoe standing in front of an interactive kiosk',
      size: 'l',
    },
  ],
  thumbnail: '/projects/dms-icon-wall/thumbnail.jpg',
};
