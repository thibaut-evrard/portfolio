'use client';
import {FC} from 'react';
import {IProjectContent} from '@/components/Projects/Projects.types';
import {
    Container,
    Paragraph,
    ProjectDescription,
    Section,
    Title,
} from './Project.styles';
import {Caption} from '@/components/Atoms/Caption';
import Carousel from '@/components/Carousel/Carousel';
import BackButton from '@/components/BackButton/BackButton';
import {content} from './Project.content';
import {Spacer} from '@/components/Atoms/Spacer';

const Project: FC<IProjectContent> = (props) => {
    return (
        <Container>
            <BackButton />
            <Spacer height={'60px'} />
            <Title>{props.title}</Title>
            <Caption>{props.year}</Caption>
            <Carousel media={props.media} />
            <ProjectDescription>
                <Section style={{minWidth: '400px', maxWidth: '600px'}}>
                    <Caption>{content.info}</Caption>
                    <Spacer height={'10rem'} />
                    <Paragraph>{props.description.toString()}</Paragraph>
                </Section>
                <Section style={{maxWidth: '600px'}}>
                    <Caption>{content.role}</Caption>
                    <Spacer height={'10rem'} />
                    <Paragraph>{props.role}</Paragraph>

                    <Spacer height={'20rem'} />

                    <Caption>{content.tools}</Caption>
                    <Spacer height={'10rem'} />
                    <Paragraph>{props.tools}</Paragraph>
                </Section>
            </ProjectDescription>
        </Container>
    );
};

export default Project;
