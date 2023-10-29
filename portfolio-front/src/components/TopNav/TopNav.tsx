'use client';
import {Container} from './TopNav.styles';
import {content} from './TopNav.content';
import {Caption} from '../Atoms/Caption';

const TopNav = () => {
    return (
        <Container>
            <Caption>{content.home}</Caption>
            <Caption>{content.headline}</Caption>
            <Caption>{content.about}</Caption>
        </Container>
    );
};

export default TopNav;
