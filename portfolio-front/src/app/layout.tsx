import type { Metadata } from 'next';
import StyledComponentsRegistry from '../components/StyledComponents/StyledComponentRegistry';
import TopNav from '@/components/Ecosystems/Navigation/TopNav/TopNav';
import GlobalStyles from '@/components/StyledComponents/GlobalStyles';
import AppContextProvider from '@/components/AppContextProvider/AppContextProvider';

export const metadata: Metadata = {
  title: "Tibo's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <AppContextProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <TopNav />
            {children}
          </StyledComponentsRegistry>
        </AppContextProvider>
      </body>
    </html>
  );
}
