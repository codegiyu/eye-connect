import type { ReactNode } from 'react';
import { Footer, type FooterProps } from './Footer';
import { Header, type HeaderProps } from './Header';

export { MainLayout, type MainLayoutProps, type SeoProps };

interface SeoProps {
  title?: string;
  desc?: string;
}

interface MainLayoutProps {
  headerProps?: HeaderProps;
  footerProps?: FooterProps;
  children: ReactNode;
  seoProps?: SeoProps;
}

const MainLayout = ({ headerProps, footerProps, children }: MainLayoutProps) => {
  return (
    <>
      <Header {...headerProps} />
      <main className="main-content h-full">{children}</main>
      <Footer {...footerProps} />
    </>
  );
};
