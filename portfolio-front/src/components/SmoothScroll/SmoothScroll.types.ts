import {MotionValue} from 'framer-motion';

export interface ISmoothScrollContext {
    progress: MotionValue<number>;
    screensProgress: MotionValue<number>;
}
