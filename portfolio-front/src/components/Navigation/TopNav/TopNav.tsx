"use client";
import { Container } from "./TopNav.styles";
import { content } from "./TopNav.content";
import { Caption } from "../../Atoms/Caption";
import Link from "next/link";

const TopNav = () => {
    return (
        <Container>
            <Link href="/" className="discreet">
                <Caption>{content.home}</Caption>
            </Link>
            <Caption>{content.headline}</Caption>
            <Link href="/about" className="discreet">
                <Caption>{content.about}</Caption>
            </Link>
        </Container>
    );
};

export default TopNav;
