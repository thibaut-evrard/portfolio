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
                <button>see more</button>
            </ContentContainer>
            <BackgroundImage src='/assets/cards/hero.jpg' fill alt='hero' />
        </Container>
    );
};

export default ProjectCard;
