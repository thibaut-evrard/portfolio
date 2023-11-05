import {MOBILE_BREAKPOINT} from '@/constants/devices';
import {motion} from 'framer-motion';
import styled from 'styled-components';

export const VideoElement = styled(motion.video)({
    display: 'block',
    objectFit: 'contain',
    height: '100%',
    width: '100%',

    [MOBILE_BREAKPOINT]: {
        // objectFit: 'cover',
    },
});
