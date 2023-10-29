import {MotionValue} from 'framer-motion';
import {createContext} from 'react';
import {ISmoothScrollContext} from './SmoothScroll.types';

export const SmoothScrollContext = createContext<ISmoothScrollContext>({
    progress: new MotionValue(),
    screensProgress: new MotionValue(),
});
