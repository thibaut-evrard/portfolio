import {MotionValue} from 'framer-motion';

export interface IWGLCanvas {
    onReady?: () => void;
    progress: MotionValue<number>;
}
