import { ICarouselMedia } from '@/components/Ecosystems/Projects/Projects.types';
import { PROJECT_NAMES } from './projects';

export type ContentType = 'text' | 'image' | 'image' | 'video' | 'carousel';
export type ContentItemSize = 's' | 'm' | 'm-l' | 'l';

export enum MobileLayoutStates {
  CONTAIN = 'contain',
  COVER = 'cover',
}

export type ProjectName = (typeof PROJECT_NAMES)[number];

interface ContentItemBase {
  size?: ContentItemSize;
}

export interface RichTextContentItem extends ContentItemBase {
  type: 'text';
  text: string;
}

export interface ImageContentType extends ContentItemBase {
  type: 'image';
  src: string;
  alt: string;
}

export interface VideoContentType extends ContentItemBase {
  type: 'video';
  src: string;
  controls?: boolean;
  autoplay?: boolean;
  muted?: boolean;
}

export interface CarouselContentType extends ContentItemBase {
  type: 'carousel';
  media: ICarouselMedia[];
}

export type ContentItem =
  | RichTextContentItem
  | ImageContentType
  | VideoContentType
  | CarouselContentType;

export interface IProjectContent {
  title: string;
  // headline: string;
  year: string;
  content: ContentItem[];
  thumbnail?: string;
  slug: string;
}
