import { Container } from '@/components/About/About.styles';
import Markdown from 'react-markdown';

const CONTENT = `
# Thibaut Evrard — Creative developer

## I want to imagine, create and build things, and I mostly use code to do so. 

## The frontier between the physical world and digital technology is the area I love exploring the most.

## I get obsessed by complex problems, I push myself keep things simple, think outside the box, and build reusable things.

## I do my best work in small collaborative teams. 
`;

const Page = () => {
  return (
    <Container>
      <Markdown className={'markdown'}>{CONTENT}</Markdown>
      <p>{'email: thibaut.evrard.1509@gmail.com'}</p>
    </Container>
  );
};

export default Page;
