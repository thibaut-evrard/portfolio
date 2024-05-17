"use client";
import Link from "next/link";
import { content } from "./ExperimentsFooter.content";
import { Container, InfoContainer } from "./ExperimentsFooter.styles";
import { IconButton } from "@/components/Atoms/IconButton/IconButton.styles";
import { FC, useState } from "react";
import InfoPanel from "./InfoPanel/InfoPanel";
import { AnimatePresence } from "framer-motion";
import { IExperimentFooter } from "./ExperimentsFooter.types";

const ExperimentsFooter: FC<IExperimentFooter> = ({ experimentContent }) => {
    const [infoVisible, setInfoVisible] = useState(false);
    return (
        <Container>
            <InfoContainer $open={infoVisible}>
                <AnimatePresence>
                    {infoVisible && (
                        <InfoPanel content={experimentContent.info} />
                    )}
                </AnimatePresence>
                <IconButton onClick={() => setInfoVisible(!infoVisible)}>
                    {content.infoCta}
                </IconButton>
            </InfoContainer>
            <Link href={experimentContent.repoPath}>
                <IconButton>{content.repoCta}</IconButton>
            </Link>
        </Container>
    );
};

export default ExperimentsFooter;
