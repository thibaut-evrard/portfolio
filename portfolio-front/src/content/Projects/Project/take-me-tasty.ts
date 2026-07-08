import { IProjectContent } from '../projects.types';

const INTRO_TEXT = `
# An Experiment by Oyster Disaster, Helping you find Authentic pubs around you.

See it live [here](https://www.oysterdisaster.com/take-me-tasty)
`;

const INFO_TEXT = `
Song and I love to explore London and find Off the beaten track pubs.
Take Me Tasty was an experiment for us to create a microsite where users get to choose a pub near them exclsively based on a few pictures capturing the vibe of the place.
When they choose a place, they are directed there on maps. Simple, efficient.

For the art direction of the product, we decided to go with old people drinking beer. To us, our elders know a good deal when they see one!
`;

function assetPath(src: string) {
  return `/projects/take-me-tasty/${src}`;
}

export const takeMeTasty: IProjectContent = {
  slug: 'take-me-tasty',
  title: 'Take Me Tasty',
  year: '2026',
  content: [
    {
      type: 'text',
      text: INTRO_TEXT,
    },
    {
      type: 'video',
      src: assetPath('video.webm'),
      autoplay: true,
      size: 'l',
    },
    {
      type: 'text',
      text: INFO_TEXT,
    },
    {
      type: 'image',
      src: assetPath('overview.webp'),
      alt: '',
      size: 'l',
    },
    {
      type: 'image',
      src: assetPath('screen-1.webp'),
      alt: '',
      size: 'l',
    },
    {
      type: 'image',
      src: assetPath('screen-2.webp'),
      alt: '',
      size: 'l',
    },
  ],
  thumbnail: assetPath('thumbnail.webp'),
};
