import { FC } from "react";
import { IProjectContent } from "../Projects/Projects.types";
import { content } from "./ProjectCard.content";
import {
    BackgroundImage,
    Container,
    ContentContainer,
    HeadlineContainer,
} from "./ProjectCard.styles";
import Link from "next/link";
import { H3, P } from "../../Atoms/Typography/Typography.styles";
import { Button } from "@/components/Atoms/Button/Button.styles";

const ProjectCard: FC<IProjectContent> = (props) => {
    return (
        <Container>
            <ContentContainer>
                <HeadlineContainer>
                    <H3>{props.title}</H3>
                </HeadlineContainer>
                <Link href={`${props.slug}`}>
                    <Button>{content.view}</Button>
                </Link>
            </ContentContainer>
            <BackgroundImage
                src={props.thumbnail}
                fill
                alt="hero"
                loading="eager"
            />
        </Container>
    );
};

export default ProjectCard;
