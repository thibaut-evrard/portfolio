import { IProjectContent } from '../projects.types';

const INTRO_TEXT = `
# Creating a fully interactive experience mixing traditional Web Technology and WebGL to create gamified ways to learn about AI.

See it live [here](https://research.google/ai-quests/intl/en_gb)
`;

const ROLE = `
# Role
- 3D engine creation
- Dev / 3D artist process orchestration
- WebGL development
- Interactive interface development
- Dev orchestration / Code review
`;

const MRT_TEXT = `
# Custom render pipeline

One of my main challenges in this project was to create a performant system to create a 3D experience within the art direction that would work on as many laptops and tablets as possible.

To maximise performance, I engineered a Multi render target render pipeline using Three.js
This technique relies on rendering each object's information first and then compositing the final output through a single post processing pass.
`;

function assetPath(src: string) {
  return `/projects/ai-quests/${src}`;
}

export const aiQuests: IProjectContent = {
  slug: 'ai-quests',
  title: 'Ai Quests',
  year: '2025',
  content: [
    {
      type: 'text',
      text: INTRO_TEXT,
    },
    {
      type: 'video',
      src: assetPath('intro.webm'),
      autoplay: true,
      size: 'l',
    },
    {
      type: 'text',
      text: ROLE,
    },
    {
      type: 'video',
      src: assetPath('market.webm'),
      autoplay: true,
      size: 'l',
    },
    {
      type: 'video',
      src: assetPath('chat-view.webm'),
      autoplay: true,
      size: 'l',
    },
    {
      type: 'video',
      src: assetPath('level-selection.webm'),
      autoplay: true,
      size: 'm',
    },
    {
      type: 'video',
      src: assetPath('treasure.webm'),
      autoplay: true,
      size: 'm',
    },
    {
      type: 'text',
      text: MRT_TEXT,
    },
    {
      type: 'image',
      alt: 'diagram representing the multi render target rendering pipeline used for the projec',
      src: assetPath('mrt.jpg '),
    },
  ],
  thumbnail: assetPath('thumbnail.webp'),
};
