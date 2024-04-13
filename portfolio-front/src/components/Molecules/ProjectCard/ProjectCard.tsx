import { FC, useState } from "react";
import { IProjectContent } from "@/content/Projects/projects.types";
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
import { IProjectCard } from "./ProjectCard.types";

const ProjectCard: FC<IProjectCard> = ({ title, thumbnailSrc, url }) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();
    const handleOnClick = () => {
        router.push(url);
    };

    return (
        <Container
            onClick={handleOnClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ContentContainer>
                <HeadlineContainer>
                    <H3>{title}</H3>
                </HeadlineContainer>
                <Button $highlight={isHovered}>{content.view}</Button>
            </ContentContainer>
            <BackgroundImage
                src={thumbnailSrc}
                fill
                alt="hero"
                loading="eager"
            />
        </Container>
    );
};

export default ProjectCard;
