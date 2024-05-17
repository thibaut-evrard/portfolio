"use client";
import ExperimentsFooter from "@/components/Ecosystems/Navigation/ExperimentsFooter/ExperimentsFooter";
import { ExperimentsContent } from "@/content/Experiments/experiments";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    const location = usePathname();
    const experimentSlug = location.split(
        "/",
    )[2] as keyof typeof ExperimentsContent;
    const content = ExperimentsContent[experimentSlug];

    return (
        <>
            {children}
            <ExperimentsFooter experimentContent={content} />
        </>
    );
};

export default Layout;
