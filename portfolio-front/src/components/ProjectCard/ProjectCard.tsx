import {FC} from 'react';
import {IProjectContent} from '../Projects/Projects.types';
import {content} from './ProjectCard.content';
import {
    BackgroundImage,
    Container,
    ContentContainer,
} from './ProjectCard.styles';
import Link from 'next/link';

const ProjectCard: FC<IProjectContent> = (props) => {
    return (
        <Container>
            <ContentContainer>
                <h3>{props.title}</h3>
                <Link href={`${props.slug}`}>
                    <button>{content.view}</button>
                </Link>
            </ContentContainer>
            <BackgroundImage src={props.thumbnail} fill alt='hero' />
        </Container>
    );
};

export default ProjectCard;
