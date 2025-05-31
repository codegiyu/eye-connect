import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';
import { ZenButton } from '../atoms/ZenButton';
import { HeroBlur, Mail, Phone, ZenliftLogoStar, ZenliftStar } from '../icons';
import Link from 'next/link';

export { Header, type HeaderProps };

type HeaderProps = ComponentProps<'header'>;

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <section className="w-full min-h-[25rem] bg-gray-text">
      <header
        className={cn(
          'w-full zen-container bg-gradient-to-b from-[#00000080] to-[#00000000]',
          className
        )}
        {...props}>
        <section className="w-full flex items-center justify-between py-5">
          <ZenButton variant="ghost" size="icon" className="" href="/">
            <div className="w-fit flex items-center gap-5">
              <i className="text-[2.25rem] sm:text-[2.5rem] text-primary">
                <ZenliftLogoStar />
              </i>
              <h2 className="font-marcel text-[1.75rem] sm:text-[2.25rem] leading-none tracking-[0.12em] text-white uppercase">
                Zenlift
              </h2>
            </div>
          </ZenButton>

          <div className="w-fit h-max hidden lg:flex items-center gap-[1.875rem]">
            <nav className="w-fit flex items-center gap-4">
              {headerLinks.map((item, idx) => (
                <HeaderLink key={idx} {...item} />
              ))}
            </nav>
            <div className="w-[1px] h-4 bg-white"></div>
            <div className="w-fit flex items-center gap-2.5">
              <ZenButton
                variant="ghost"
                size="icon"
                className="w-[3.75rem] aspect-square bg-white/30 grid place-items-center rounded-full border border-white"
                href="tel:+2348140629487">
                <i className="text-white text-2xl">
                  <Phone />
                </i>
              </ZenButton>
              <ZenButton
                variant="ghost"
                size="icon"
                className="w-[3.75rem] aspect-square grid place-items-center rounded-full border border-white"
                href="mailto:eomegbu@gmail.com">
                <i className="text-white text-2xl">
                  <Mail />
                </i>
              </ZenButton>
            </div>
          </div>
        </section>
      </header>

      <section className="hero zen-container pt-[4.375rem] pb-[7.5rem] relative">
        <div className="w-full grid gap-10 lg:flex justify-between text-white px-0 xl:px-10 1440:px-14 2xl:px-16 relative z-[2]">
          <div className="w-full h-fit grid">
            <div className="w-full max-w-[31.875rem] grid gap-6">
              <div className="w-full grid">
                <p className="typo-subtitle uppercase">Zenlift - Mental Health</p>
                <h1 className="typo-h1">Your Path to Mental Wellness Starts Here</h1>
              </div>
              <p className="w-full typo-body2 text-light-gray-1 pt-5 border-t border-light-gray">
                Odio cras proin proin sit quis fringilla aliquet. Consectetur elementum viverra
                egestas egestas nulla ullamcorper varius quam.
              </p>
              <ZenButton text="Learn More" textClassName="uppercase" />
            </div>
          </div>

          <div className="w-full h-fit flex-col items-end justify-between">
            <div className="w-full flex items-center justify-end mb-24">
              <Link
                href="https://youtu.be/f-1VlUNHowg?si=QygFlUMB1z8ibGme"
                target="_blank"
                rel="noreferrer noopener">
                <div className="w-fit flex items-center gap-5">
                  <p className="typo-body2 text-white">Watch Our Story</p>
                  <div className="w-[3.75rem] aspect-square border-2 border-white rounded-full relative">
                    <div
                      className="w-[1.375rem] aspect-square bg-primary rounded-full grid place-items-center absolute 
                      top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-[0.375rem] text-dark-secondary">
                      <svg width="1em" height="1em" viewBox="0 0 24 24">
                        <polygon points="0,0 24,12 0,24" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="w-full h-fit max-w-[19.75rem] bg-white rounded-xl overflow-hidden ml-auto">
              <div className="w-full aspect-[1.37] bg-dark-primary"></div>
              <div className="w-full grid gap-4 p-6">
                <div className="w-full flex items-center justify-between">
                  <h6 className="typo-body1 text-dark-primary">Core Services</h6>
                  <i className="text-primary-dark text-xl">
                    <ZenliftStar />
                  </i>
                </div>
                <div className="w-full grid gap-3">
                  <p className="w-full bg-primary-light typo-body3 text-dark-secondary pt-2 pb-2.5 px-[1.875rem] rounded-full">
                    Therapy Sessions
                  </p>
                  <p className="w-full bg-primary-light typo-body3 text-dark-secondary pt-2 pb-2.5 px-[1.875rem] rounded-full">
                    Psychiatric Consultations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <i className="absolute bottom-0 right-0 z-[1] text-[18rem] lg:text-[25rem]">
          <HeroBlur />
        </i>
      </section>
    </section>
  );
};

interface HeaderLinkProps {
  text: string;
  link: string;
}

const headerLinks: HeaderLinkProps[] = [
  { text: 'Home', link: '/' },
  { text: 'About Us', link: '/#about-us' },
  { text: 'Services', link: '/#services' },
];

const HeaderLink = ({ text, link }: HeaderLinkProps) => {
  return (
    <ZenButton
      variant="ghost"
      size="icon"
      className="hover:underline hover:underline-offset-4 decoration-2 decoration-primary"
      textClassName="typo-button text-white"
      text={text}
      href={link}
    />
  );
};
