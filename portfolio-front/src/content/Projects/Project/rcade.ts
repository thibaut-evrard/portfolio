import { IProjectContent } from '../projects.types';

const INTRO_TEXT = `
# Launch Trailer experience for Rcade Network

See it live [here](https://rcade.network/)
`;

const ROLE = `
# Creating a Wow effect landing page to immerse users into the RCADE universe.

My role on this project was very focused on developing a hyper immersive and engaging animated sequence to make the landing page as engaging as possible.

## Technology
- Three
- React
- GSAP
`;

function assetPath(src: string) {
  return `/projects/rcade/${src}`;
}

export const rcade: IProjectContent = {
  slug: 'rcade',
  title: 'Rcade Network',
  year: '2024',
  content: [
    {
      type: 'text',
      text: INTRO_TEXT,
    },
    {
      type: 'video',
      src: assetPath('rcade-main.webm'),
      autoplay: true,
    },
    {
      type: 'text',
      text: ROLE,
    },
    {
      type: 'video',
      src: assetPath('nexus.mp4'),
      size: 'm',
      autoplay: true,
    },
    {
      type: 'video',
      src: assetPath('god-rays.webm'),
      size: 'm',
      autoplay: true,
    },
    {
      type: 'video',
      src: assetPath('interaction.webm'),
      autoplay: true,
    },
  ],
  thumbnail: assetPath('thumbnail.webp'),
};
