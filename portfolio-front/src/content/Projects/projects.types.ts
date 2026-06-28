import { ICarouselMedia } from '@/components/Ecosystems/Projects/Projects.types';
import { PROJECT_NAMES } from './projects';

export type ContentType = 'text' | 'image' | 'image' | 'video' | 'carousel';

export enum MobileLayoutStates {
  CONTAIN = 'contain',
  COVER = 'cover',
}

export type ProjectName = (typeof PROJECT_NAMES)[number];

interface RichTextContentItem {
  type: 'text';
  text: string;
}

interface ImageContentType {
  type: 'image';
  src: string;
  alt: string;
}

interface VideoContentType {
  type: 'video';
  src: string;
}

interface CarouselContentType {
  type: 'carousel';
  media: ICarouselMedia[];
}

type ContentItem =
  | RichTextContentItem
  | ImageContentType
  | VideoContentType
  | CarouselContentType;

export interface IProjectContent {
  title: string;
  headline: string;
  year: string;
  content?: ContentItem[];
  media?: ICarouselMedia[];
  description?: string;
  role?: string;
  tools?: string;
  thumbnail?: string;
  slug: string;
}
