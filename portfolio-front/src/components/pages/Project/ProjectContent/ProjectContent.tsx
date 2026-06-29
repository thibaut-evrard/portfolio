import { ContentItem } from '@/content/Projects/projects.types';
import Markdown from 'react-markdown';
import { FC } from 'react';
import { Container } from './ProjectContent.styles';
import Carousel from '@/components/Ecosystems/Carousel/Carousel';

interface Props {
  content: ContentItem[];
}

function getSizeClass(content: ContentItem) {
  switch (content.size) {
    case 's':
      return 'size--s';
    case 'm':
      return 'size--m';
    default:
      return 'size--l';
  }
}

const ProjectContent: FC<Props> = ({ content }) => {
  return (
    <Container>
      {content.map((item, index) => {
        switch (item.type) {
          case 'text':
            return (
              <Markdown key={index} className={'markdown'}>
                {item.text}
              </Markdown>
            );
          case 'image':
            return (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className={getSizeClass(item)}
              />
            );
          case 'video':
            return (
              <video
                key={index}
                src={item.src}
                className={getSizeClass(item)}
                playsInline
                controls
              ></video>
            );
          case 'carousel':
            return <Carousel key={index} media={item.media} />;
          default:
            return null;
        }
      })}
    </Container>
  );
};

export default ProjectContent;
