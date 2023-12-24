import {ICarouselMedia} from '@/components/Projects/Projects.types';
import {MobileLayoutStates} from '@/content/content.types';

export interface IVideo {
    media: ICarouselMedia;
    onPan: (event: any, info: any) => void;
    onPanEnd: (event: any, info: any) => void;
    active: boolean;
}

export interface IVideoElement {
    $mobileLayout: MobileLayoutStates;
}
