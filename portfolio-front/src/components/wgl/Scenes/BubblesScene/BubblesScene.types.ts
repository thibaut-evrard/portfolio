import { MotionValue } from 'framer-motion';

export interface IBubblesScene {
  onReady?: () => void;
  progress: MotionValue<number>;
}
