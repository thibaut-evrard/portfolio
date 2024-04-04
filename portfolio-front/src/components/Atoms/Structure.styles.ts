import styled from 'styled-components';
import {ISpacer} from './Atoms.types';

export const Spacer = styled.div<ISpacer>(({height}) => ({
    height,
    display: 'block',
}));
