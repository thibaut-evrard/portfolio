import { ICarouselMedia } from '@/components/Ecosystems/Projects/Projects.types';
import { MobileLayoutStates } from '@/content/Projects/projects.types';

export interface IVideo {
  media: ICarouselMedia;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPan: (event: Event, info: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPanEnd: (event: Event, info: any) => void;
  active: boolean;
}

export interface IVideoElement {
  $mobileLayout: MobileLayoutStates;
}
