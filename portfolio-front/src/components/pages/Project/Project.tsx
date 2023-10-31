'use client';
import {FC} from 'react';
import {IProjectContent} from '@/components/Projects/Projects.types';
import {
    Container,
    Paragraph,
    ProjectDescription,
    Section,
} from './Project.styles';
import {Caption} from '@/components/Atoms/Caption';
import Carousel from '@/components/Carousel/Carousel';
import BackButton from '@/components/BackButton/BackButton';
import {content} from './Project.content';

const Project: FC<IProjectContent> = (props) => {
    return (
        <Container>
            <BackButton />
            <h2>{props.title}</h2>
            <Caption>{props.year}</Caption>
            <Carousel media={props.media} />
            <ProjectDescription>
                <Section style={{minWidth: '400px', maxWidth: '600px'}}>
                    <Caption>{content.info}</Caption>
                    <Paragraph>{props.description.toString()}</Paragraph>
                </Section>
                <Section style={{maxWidth: '600px'}}>
                    <Caption>{content.role}</Caption>
                    <Paragraph>{props.role}</Paragraph>
                    <Caption>{content.tools}</Caption>
                    <Paragraph>{props.tools}</Paragraph>
                </Section>
            </ProjectDescription>
        </Container>
    );
};

export default Project;
