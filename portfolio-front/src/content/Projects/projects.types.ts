import { ICarouselMedia } from '@/components/Ecosystems/Projects/Projects.types';
import { PROJECT_NAMES } from './projects';

export type ProjectName = (typeof PROJECT_NAMES)[number];

export enum MobileLayoutStates {
  CONTAIN = 'contain',
  COVER = 'cover',
}
export interface IProjectContent {
  title: string;
  year: string;
  media: ICarouselMedia[];
  headline: string;
  description: string;
  role: string;
  tools: string;
  thumbnail: string;
  slug: string;
}
