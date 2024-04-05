import { FC } from "react";
import { IProjectContent } from "../Projects/Projects.types";
import { content } from "./ProjectCard.content";
import {
    BackgroundImage,
    Container,
    ContentContainer,
    HeadlineContainer,
} from "./ProjectCard.styles";
import { H3, P } from "../../Atoms/Typography/Typography.styles";
import { Button } from "@/components/Atoms/Button/Button.styles";
import { useRouter } from "next/navigation";

const ProjectCard: FC<IProjectContent> = (props) => {
    const router = useRouter();
    const handleOnClick = () => {
        router.push(`/projects/${props.slug}`);
    };

    return (
        <Container onClick={handleOnClick}>
            <ContentContainer>
                <HeadlineContainer>
                    <H3>{props.title}</H3>
                </HeadlineContainer>
                <Button>{content.view}</Button>
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
