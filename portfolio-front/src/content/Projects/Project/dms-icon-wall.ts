import { IProjectContent } from '../projects.types';

function assetPath(src: string) {
  return `/projects/dms-icon-wall/${src}`;
}
const INTRO_COPY = `
## An in-store interactive experience for Dr. Martens on Carnaby Street. Users place a boot onto a physical stand to explore its features, discover style inspiration, and get maintenance tips.
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
## Role: Frontend Lead

I spent a significant amount of time finessing the WebGL scene: optimizing 3D assets using Blender, animating scene objects, and adding depth-of-field blur and particle systems to bring the environment to life.

Because I knew this project would run on a custom, high-performance machine, I was able to go all-in on the transitions and CSS animations to make the experience as immersive and engaging as possible.
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
