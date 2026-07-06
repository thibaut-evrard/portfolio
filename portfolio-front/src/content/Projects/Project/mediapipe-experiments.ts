import { IProjectContent } from '../projects.types';

const INTRO_TEXT = `## A collection of experiments exploring movement based interactions using Mediapipe Js`;

function assetPath(src: string) {
  return `/projects/mediapipe-experiments/${src}`;
}

export const mediapipeExperiments: IProjectContent = {
  slug: 'mediapipe-experiments',
  title: 'Mediapipe Experiments',
  year: '2021',
  content: [
    {
      type: 'text',
      text: INTRO_TEXT,
    },
    {
      type: 'video',
      src: assetPath('video.mp4'),
      size: 'm',
      controls: true,
    },
    {
      type: 'video',
      src: assetPath('video1.mp4'),
      size: 'm',
      controls: true,
    },
    {
      type: 'video',
      src: assetPath('video4.mp4'),
      size: 'm',
      controls: true,
    },
    {
      type: 'video',
      src: assetPath('video5.mp4'),
      size: 'm',
      controls: true,
    },
  ],
  thumbnail: '/projects/mediapipe-experiments/thumbnail.jpg',
};
