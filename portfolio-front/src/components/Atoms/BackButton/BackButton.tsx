import Link from "next/link";
import { content } from "./BackButton.content";
import { Button } from "./BackButton.styles";
import { FC, HTMLAttributes, LinkHTMLAttributes } from "react";
import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";
import { HTMLMotionProps, motion } from "framer-motion";

const BackButton: FC<HTMLMotionProps<"div">> = (props) => {
    return (
        <motion.div {...props} style={{ position: "relative" }}>
            <Link href={"/"} style={{ textDecoration: "none", margin: "none" }}>
                <Button>{content.back}</Button>
            </Link>
        </motion.div>
    );
};

export default BackButton;
motion;
