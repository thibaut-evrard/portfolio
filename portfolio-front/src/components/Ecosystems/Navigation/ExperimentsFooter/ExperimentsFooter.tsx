"use client";
import { content } from "./ExperimentsFooter.content";
import { CodeIcon, Container } from "./ExperimentsFooter.styles";

const ExperimentsFooter = () => {
    return (
        <Container>
            <CodeIcon href={content.url}>{content.title}</CodeIcon>
        </Container>
    );
};

export default ExperimentsFooter;
