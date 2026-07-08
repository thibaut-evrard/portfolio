import { FC } from 'react';
import { IProjectHeadline } from './ProjectHeadline.types';
import { Container } from './ProjectHeadline.styles';
import { H3 } from '@/components/Atoms/Typography/Typography.styles';

const ProjectHeadline: FC<IProjectHeadline> = ({ text }) => {
  return (
    <Container>
      <H3>{text}</H3>
    </Container>
  );
};

export default ProjectHeadline;
