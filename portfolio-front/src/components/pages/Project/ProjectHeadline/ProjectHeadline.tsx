import { FC, useEffect, useState } from "react";
import { IProjectHeadline } from "./ProjectHeadline.types";
import { Container } from "./ProjectHeadline.styles";
import { H2, H3 } from "@/components/Atoms/Typography/Typography.styles";
import AnimatedText from "@/components/AnimatedText/AnimatedText/AnimatedText";

const ProjectHeadline: FC<IProjectHeadline> = ({ text }) => {
    const [isTextVisible, setIsTextVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsTextVisible(true);
        }, 1000);
    }, []);

    return (
        <Container>
            <H3>
                <AnimatedText innerHtml={text} isVisible={isTextVisible} />
            </H3>
        </Container>
    );
};

export default ProjectHeadline;
