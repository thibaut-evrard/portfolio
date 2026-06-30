import { IProjectContent, MobileLayoutStates } from '../projects.types';

function assetPath(src: string) {
  return `/projects/oyster-disaster/${src}`;
}
const INTRO_TEXT = `# Experimental Art / Design Duo with Songyee Kim
For Song and I Oyster disaster is an experimental playground to bring our crazy ideas to life.

## Executions
Over the years, our work took different forms
- Augmented exhibition for artist Lydia Chan
- WebGL and AR experimenation
- Merch
- Web projects
- Food

## Roles
Song handles the design tools, I write the code. All the creative and ideation is made together.
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
