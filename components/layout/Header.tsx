'use client';
import { cn } from '@/lib/utils';
import { useState, type ComponentProps } from 'react';
import { ZenButton } from '../atoms/ZenButton';
import { HeroBlur, Menu, ZenliftStar } from '../icons';
import { ContactButton } from '../atoms/ContactButton';
import { YoutubeStoryBtn } from '../atoms/YoutubeStoryBtn';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import { GhostButton } from '../atoms/GhostButton';
import { LogoLink } from '../atoms/LogoLink';
import { XIcon } from 'lucide-react';

export { Header, type HeaderProps };

type HeaderProps = ComponentProps<'header'>;

const Header = ({ className, ...props }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="w-full min-h-[25rem] bg-gray-text">
      <header
        className={cn(
          'w-full zen-container bg-gradient-to-b from-[#00000080] to-[#00000000]',
          className
        )}
        {...props}>
        <section className="w-full flex items-center justify-between py-5">
          <LogoLink />

          <div className="w-fit h-max hidden lg:flex items-center gap-[1.875rem]">
            <nav className="w-fit">
              <ul className="w-fit flex items-center gap-4">
                {headerLinks.map((item, idx) => (
                  <HeaderLink key={idx} {...item} />
                ))}
              </ul>
            </nav>
            <div className="w-[1px] h-4 bg-white"></div>
            <div className="w-fit flex items-center gap-2.5">
              <ContactButton type="phone" />
              <ContactButton type="mail" />
            </div>
          </div>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger className="w-fit lg:hidden outline-none" asChild>
              <GhostButton
                variant="ghost"
                size="icon"
                className="lg:hidden hover:bg-transparent"
                wrapClassName="lg:hidden"
                Icon={Menu}
                iconClass="text-white text-5xl"
                onClick={() => setMenuOpen(prev => !prev)}
              />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-screen h-screen grid gap-0 p-0 border-none bg-transparent"
              aria-describedby={undefined}>
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <section className="w-full h-full flex-none bg-white py-5 px-5">
                <div className="h-full flex flex-col justify-between">
                  <div className="center-container w-full flex items-center justify-between">
                    <LogoLink inLightBg />
                    <GhostButton className="p-2" onClick={() => setMenuOpen(false)}>
                      <XIcon className="size-5 text-red-500" />
                    </GhostButton>
                  </div>
                  <nav className="w-full">
                    <ul className="w-full grid items-center justify-items-center gap-14">
                      {headerLinks.map((item, idx) => (
                        <HeaderLink
                          key={idx}
                          {...item}
                          afterClick={() => setMenuOpen(false)}
                          inLightBg
                        />
                      ))}
                      <li>
                        <div className="w-full flex items-center justify-center gap-6">
                          <ContactButton
                            type="phone"
                            onClick={() => setMenuOpen(false)}
                            inWhiteBg
                          />
                          <ContactButton type="mail" onClick={() => setMenuOpen(false)} inWhiteBg />
                        </div>
                      </li>
                    </ul>
                  </nav>
                  <div className="w-full h-24">
                    <p className=""></p>
                  </div>
                </div>
              </section>
            </SheetContent>
          </Sheet>
        </section>
      </header>

      <section className="hero zen-container pt-[4.375rem] pb-[7.5rem] relative">
        <div className="w-full extra-padding-container grid gap-10 lg:flex justify-center lg:justify-between text-white relative z-[2]">
          <div className="w-full max-w-[31.875rem] h-fit grid justify-self-center ">
            <div className="w-full grid gap-6">
              <div className="w-full grid">
                <p className="typo-subtitle uppercase">Zenlift - Mental Health</p>
                <h1 className="typo-h1">Your Path to Mental Wellness Starts Here</h1>
              </div>
              <p className="w-full typo-body2 text-light-gray-1 pt-5 border-t border-light-gray">
                Odio cras proin proin sit quis fringilla aliquet. Consectetur elementum viverra
                egestas egestas nulla ullamcorper varius quam.
              </p>
              <div className="w-full flex items-center justify-between">
                <ZenButton text="Learn More" textClassName="uppercase" />
                <YoutubeStoryBtn className="lg:hidden" />
              </div>
            </div>
          </div>

          <div className="w-full h-fit hidden lg:flex flex-col items-end justify-between">
            <div className="w-full flex items-center justify-end mb-24">
              <YoutubeStoryBtn className="hidden lg:block" />
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
  inLightBg?: boolean;
  afterClick?: () => void;
}

const headerLinks: HeaderLinkProps[] = [
  { text: 'Home', link: '/' },
  { text: 'About Us', link: '/#about-us' },
  { text: 'Services', link: '/#services' },
];

const HeaderLink = ({ text, link, inLightBg, afterClick }: HeaderLinkProps) => {
  return (
    <li>
      <ZenButton
        variant="ghost"
        size="icon"
        className={`${inLightBg ? '' : 'hover:underline'} hover:underline-offset-4 decoration-2 decoration-primary`}
        textClassName={`typo-button ${inLightBg ? 'text-dark-primary hover:text-primary-dark' : 'text-white'}`}
        text={text}
        href={link}
        onClick={() => {
          afterClick?.();
        }}
      />
    </li>
  );
};
