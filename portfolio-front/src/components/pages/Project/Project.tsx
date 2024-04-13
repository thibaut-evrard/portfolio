"use client";
import { FC, useEffect, useState } from "react";
import { IProject } from "@/components/Ecosystems/Projects/Projects.types";
import { Container, Title } from "./Project.styles";
import { Caption } from "@/components/Atoms/Typography/Typography.styles";
import Carousel from "@/components/Ecosystems/Carousel/Carousel";
import BackButton from "@/components/Atoms/BackButton/BackButton";
import { Spacer } from "@/components/Atoms/Structure.styles";
import { useIsMobile } from "@/hooks/device/useIsMobile";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
import ProjectHeadline from "./ProjectHeadline/ProjectHeadline";
import { motion } from "framer-motion";
import { EVariants } from "@/constants/animations/animations.types";
import * as animations from "./Project.animations";
import AnimatedText from "@/components/AnimatedText/AnimatedText/AnimatedText";

const Project: FC<IProject> = ({ project }) => {
    const [variant, setVariant] = useState(EVariants.Before);
    const isMobile = useIsMobile();

    useEffect(() => {
        setVariant(EVariants.Primary);
    }, []);

    return (
        <Container as={motion.div} {...animations.container} animate={variant}>
            <BackButton {...animations.child} />
            {isMobile ? <Spacer height={"10px"} /> : <Spacer height={"60px"} />}
            <Title as={motion.h2} {...animations.child}>
                {project.title}
            </Title>
            <ProjectHeadline text={project.headline} />
            <Caption as={motion.p} {...animations.child}>
                {project.year}
            </Caption>
            <Spacer height={"30px"} />
            <Spacer height={"30px"} />
            <Carousel media={project.media} />
            <ProjectDescription project={project} />
        </Container>
    );
};

export default Project;
