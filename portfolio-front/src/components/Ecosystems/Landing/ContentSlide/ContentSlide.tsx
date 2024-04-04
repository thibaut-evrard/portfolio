import { FC } from "react";
import { Container, Wrapper } from "./ContentSlide.styles";
import { motion, useTransform } from "framer-motion";
import { content } from "../Landing.content";
import { IContentSlide } from "./ContentSlide.types";
import { H3, P } from "@/components/Atoms/Typography/Typography.styles";

const ContentSlide: FC<IContentSlide> = ({ progress }) => {
    const translateY = useTransform(progress, [0, 1], ["0vh", "-20vh"]);
    const nameOpacity = useTransform(progress, [0.2, 0.3], [0, 1]);
    const titleOpacity = useTransform(progress, [0.6, 0.7], [0, 1]);

    return (
        <Container>
            <Wrapper style={{ translateY }}>
                <P as={motion.p} style={{ opacity: nameOpacity }}>
                    {content.intro.title}
                </P>
                <H3 as={motion.h3} style={{ opacity: titleOpacity }}>
                    {content.intro.description}
                </H3>
            </Wrapper>
        </Container>
    );
};

export default ContentSlide;
