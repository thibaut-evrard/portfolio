import { ProjectList } from "@/content/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import { content } from "./Projects.content";
import { Container, ProjectsContainer } from "./Projects.styles";
import { Spacer } from "../../Atoms/Structure.styles";
import { Headline } from "../../Atoms/Typography/Typography.styles";

const Projects = () => {
    return (
        <Container>
            <Headline>{content.work}</Headline>
            <Spacer height={"10rem"} />
            <ProjectsContainer>
                {ProjectList.map((project, index) => {
                    return <ProjectCard {...project} key={index} />;
                })}
            </ProjectsContainer>
        </Container>
    );
};

export default Projects;
