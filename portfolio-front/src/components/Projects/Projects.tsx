import ProjectCard from '../ProjectCard/ProjectCard';
import {content} from './Projects.content';
import {Container} from './Projects.styles';

const Projects = () => {
    return (
        <Container>
            <h1>{content.work}</h1>
            <ProjectCard key='1' />
            <ProjectCard key='2' />
            <ProjectCard key='3' />
        </Container>
    );
};

export default Projects;
