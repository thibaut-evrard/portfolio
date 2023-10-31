import {ProjectList} from '@/content/projects';
import ProjectCard from '../ProjectCard/ProjectCard';
import {content} from './Projects.content';
import {Container} from './Projects.styles';

const Projects = () => {
    return (
        <Container>
            <h1>{content.work}</h1>
            {ProjectList.map((project) => {
                return <ProjectCard {...project} />;
            })}
        </Container>
    );
};

export default Projects;
