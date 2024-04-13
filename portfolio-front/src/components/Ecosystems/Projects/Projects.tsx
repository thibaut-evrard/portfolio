import { ProjectList } from "@/content/Projects/projects";
import ProjectCard from "../../Molecules/ProjectCard/ProjectCard";
import { content } from "./Projects.content";
import { Spacer } from "../../Atoms/Structure.styles";
import { Headline } from "../../Atoms/Typography/Typography.styles";
import {
    ProjectCardsContainer,
    ProjectsSectionContainer,
} from "@/components/Atoms/Structure/Projects/Projects.styles";

const Projects = () => {
    return (
        <ProjectsSectionContainer>
            <Headline>{content.work}</Headline>
            <Spacer height={"10rem"} />
            <ProjectCardsContainer>
                {ProjectList.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            thumbnailSrc={project.thumbnail}
                            url={`/projects/${project.slug}`}
                        />
                    );
                })}
            </ProjectCardsContainer>
        </ProjectsSectionContainer>
    );
};

export default Projects;
