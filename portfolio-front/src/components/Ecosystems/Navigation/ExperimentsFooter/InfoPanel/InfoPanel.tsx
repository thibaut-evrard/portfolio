import { FC } from "react";
import { Container, ContentContainer, InfoMarkdown } from "./InfoPanel.styles";
import { EVariants } from "@/constants/animations/animations.types";
import * as animations from "./InfoPanel.animations";
import { IInfoPanel } from "./InfoPanel.types";

const InfoPanel: FC<IInfoPanel> = ({ content }) => {
    console.log(content);
    return (
        <Container
            {...animations.container}
            animate={EVariants.Primary}
            exit={EVariants.After}
        >
            <ContentContainer {...animations.contentContainer}>
                <InfoMarkdown>{content}</InfoMarkdown>
            </ContentContainer>
        </Container>
    );
};

export default InfoPanel;
