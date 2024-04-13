import { FC } from "react";
import { IProject } from "@/components/Ecosystems/Projects/Projects.types";
import { Container, Paragraph, Section } from "./ProjectDescription.styles";
import { Caption } from "@/components/Atoms/Typography/Typography.styles";
import { Spacer } from "@/components/Atoms/Structure.styles";
import { content } from "../Project.content";

const ProjectDescription: FC<IProject> = ({ project }) => {
    return (
        <Container>
            <Section>
                <Caption>{content.info}</Caption>
                <Spacer height={"10rem"} />
                <Paragraph>{project.description.toString()}</Paragraph>
            </Section>
            <Section>
                <Caption>{content.role}</Caption>
                <Spacer height={"10rem"} />
                <Paragraph>{project.role}</Paragraph>

                <Spacer height={"20rem"} />

                <Caption>{content.tools}</Caption>
                <Spacer height={"10rem"} />
                <Paragraph>{project.tools}</Paragraph>
            </Section>
        </Container>
    );
};

export default ProjectDescription;
