import ExperimentsFooter from "@/components/Navigation/ExperimentsFooter/ExperimentsFooter";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            {children}
            <ExperimentsFooter />
        </>
    );
};

export default Layout;
