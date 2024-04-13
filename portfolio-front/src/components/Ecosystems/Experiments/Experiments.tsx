import {
    ProjectCardsContainer,
    ProjectsSectionContainer,
} from "@/components/Atoms/Structure/Projects/Projects.styles";
import { content } from "./Experiments.content";
import { Headline } from "@/components/Atoms/Typography/Typography.styles";
import { Spacer } from "@/components/Atoms/Structure.styles";
import { ExperiementsList } from "@/content/Experiments/experiments";
import ProjectCard from "@/components/Molecules/ProjectCard/ProjectCard";

const Experiments = () => {
    return (
        <ProjectsSectionContainer>
            <Headline>{content.title}</Headline>
            <Spacer height={"10rem"} />
            <ProjectCardsContainer>
                {ExperiementsList.map((project, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            thumbnailSrc={project.thumbnailSrc}
                            url={`/experiment/${project.slug}`}
                        />
                    );
                })}
            </ProjectCardsContainer>
        </ProjectsSectionContainer>
    );
};

export default Experiments;
