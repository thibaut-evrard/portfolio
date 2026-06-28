import type { Metadata } from 'next';
import StyledComponentsRegistry from '../components/StyledComponents/StyledComponentRegistry';
import TopNav from '@/components/Ecosystems/Navigation/TopNav/TopNav';
import GlobalStyles from '@/components/StyledComponents/GlobalStyles';

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
        <StyledComponentsRegistry>
          <GlobalStyles />
          <TopNav />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
