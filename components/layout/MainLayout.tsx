import type { ReactNode } from 'react';
import { Footer, type FooterProps } from './Footer';
import { Header, type HeaderProps } from './Header';
import { YoutubeVidDisplay } from '../general/YoutubeVidDisplay';

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
      <section>
        <Header {...headerProps} />
      </section>
      <main className="main-content h-full">
        {children}
        <YoutubeVidDisplay />
      </main>
      <Footer {...footerProps} />
    </>
  );
};
