import { ContentItem } from '@/content/Projects/projects.types';
import Markdown from 'react-markdown';
import { FC } from 'react';
import { Container } from './ProjectContent.styles';
import Carousel from '@/components/Ecosystems/Carousel/Carousel';
import Video from '@/components/Video';

interface Props {
  content: ContentItem[];
}

function getSizeClass(content: ContentItem) {
  switch (content.size) {
    case 's':
      return 'size--s';
    case 'm':
      return 'size--m';
    case 'm-l':
      return 'size--m-l';
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
              <Markdown
                key={index}
                className={`markdown ${getSizeClass(item)}`}
              >
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
              <Video
                key={index}
                src={item.src}
                className={getSizeClass(item)}
                playsInline
                controls={item.controls}
                customAutoPlay={item.autoplay || false}
                muted={item.muted}
                loop={item.autoplay}
              ></Video>
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
