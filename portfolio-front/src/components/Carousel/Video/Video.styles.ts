import {MOBILE_BREAKPOINT} from '@/constants/devices';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {IVideoElement} from './Video.types';

export const VideoElement = styled(motion.video)<IVideoElement>(
    ({$mobileLayout}) => ({
        display: 'block',
        objectFit: 'contain',
        height: '100%',
        width: '100%',

        [MOBILE_BREAKPOINT]: {
            objectFit: $mobileLayout,
        },
    })
);
