"use client";
import { content } from "./ExperimentsFooter.content";
import { Container } from "./ExperimentsFooter.styles";

const ExperimentsFooter = () => {
    return (
        <Container>
            <a href={content.url}>{content.title}</a>
        </Container>
    );
};

export default ExperimentsFooter;
