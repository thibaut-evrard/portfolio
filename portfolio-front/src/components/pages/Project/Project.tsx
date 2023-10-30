'use client';
import ReactMarkdown from 'react-markdown';
import {FC} from 'react';
import {IProjectContent} from '@/components/Projects/Projects.types';
import {Container, ProjectDescription, Section} from './Project.styles';
import {Caption} from '@/components/Atoms/Caption';
import Carousel from '@/components/Carousel/Carousel';
import BackButton from '@/components/BackButton/BackButton';

const Project: FC<IProjectContent> = (props) => {
    console.log(props);
    return (
        <Container>
            <BackButton />
            <h2>{props.title}</h2>
            {/* <Caption>{props.year}</Caption> */}
            <Carousel media={props.media} />
            <ProjectDescription>
                <Section style={{minWidth: '400px'}}>
                    <Caption>info</Caption>
                    <ReactMarkdown>
                        {props.description.toString()}
                    </ReactMarkdown>
                </Section>
                <Section style={{maxWidth: '600px'}}>
                    <Caption>role</Caption>
                    <ReactMarkdown>{props.role}</ReactMarkdown>
                    <Caption>tools</Caption>
                    <ReactMarkdown>{props.tools}</ReactMarkdown>
                </Section>
            </ProjectDescription>
        </Container>
    );
};

export default Project;
