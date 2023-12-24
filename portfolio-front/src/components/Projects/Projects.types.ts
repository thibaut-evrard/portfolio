import {MobileLayoutStates} from '@/content/content.types';

export interface IProjectContent {
    title: string;
    year: string;
    media: ICarouselMedia[];
    description: string;
    role: string;
    tools: string;
    thumbnail: string;
    slug: string;
}

export interface ICarouselMedia {
    src: string;
    mobileLayout: MobileLayoutStates;
}
