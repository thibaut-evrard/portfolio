import type {Metadata} from 'next';
import 'src/styles/globals.css';
import StyledComponentsRegistry from '../lib/registry';
import Head from '@/components/Head/Head';
import TopNav from '@/components/TopNav/TopNav';

export const metadata: Metadata = {
    title: "Tibo's portfolio",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html className='test'>
            <Head />
            <body>
                <StyledComponentsRegistry>
                    <TopNav />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
