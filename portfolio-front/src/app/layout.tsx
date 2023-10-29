import type {Metadata} from 'next';
import 'src/styles/globals.css';
import StyledComponentsRegistry from '../lib/registry';
import Head from '@/components/Head/Head';
import SmoothScroll from '@/components/SmoothScroll/SmoothScroll';
import TopNav from '@/components/TopNav/TopNav';

export const metadata: Metadata = {
    title: "Tibo's portfolio",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html>
            <Head />
            <body>
                <StyledComponentsRegistry>
                    <TopNav />
                    <SmoothScroll>{children}</SmoothScroll>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
