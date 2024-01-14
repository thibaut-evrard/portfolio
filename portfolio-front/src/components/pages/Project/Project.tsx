'use client';
import { FC } from 'react';
import { IProjectContent } from '@/components/Projects/Projects.types';
import {
  Container,
  Paragraph,
  ProjectDescription,
  Section,
  Title
} from './Project.styles';
import { Caption } from '@/components/Atoms/Caption';
import Carousel from '@/components/Carousel/Carousel';
import BackButton from '@/components/BackButton/BackButton';
import { content } from './Project.content';
import { Spacer } from '@/components/Atoms/Spacer';
import { useIsMobile } from '@/hooks/device/useIsMobile';

const Project: FC<IProjectContent> = (props) => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <BackButton />
      {isMobile ? <Spacer height={'10px'} /> : <Spacer height={'60px'} />}
      <Title>{props.title}</Title>
      <Caption>{props.year}</Caption>
      <Carousel media={props.media} />
      <ProjectDescription>
        <Section>
          <Caption>{content.info}</Caption>
          <Spacer height={'10rem'} />
          <Paragraph>{props.description.toString()}</Paragraph>
        </Section>
        <Section>
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
