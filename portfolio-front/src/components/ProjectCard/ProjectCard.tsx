import {content} from './ProjectCard.content';
import {
    BackgroundImage,
    Container,
    ContentContainer,
} from './ProjectCard.styles';

const ProjectCard = () => {
    return (
        <Container>
            <ContentContainer>
                <h3>Project Name</h3>
                <button>{content.view}</button>
            </ContentContainer>
            <BackgroundImage
                src='/assets/cards/bananaz.png'
                width={window.innerWidth}
                height={700}
                alt='hero'
            />
        </Container>
    );
};

export default ProjectCard;
