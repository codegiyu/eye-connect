'use client';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState, type ComponentProps } from 'react';
import { ZenButton } from '../atoms/ZenButton';
import { Menu } from '../icons';
import { ContactButton } from '../atoms/ContactButton';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import { GhostButton } from '../atoms/GhostButton';
import { LogoLink } from '../atoms/LogoLink';
import { XIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

export { Header, type HeaderProps };

type HeaderProps = ComponentProps<'header'> & {
  solidBackground?: boolean;
};

const Header = ({ className, solidBackground, ...props }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        `w-full zen-container ${solidBackground ? 'bg-dark-secondary' : 'bg-gradient-to-b from-[#00000080] to-[#00000000]'}`,
        className
      )}
      {...props}>
      <section className="w-full flex items-center justify-between py-5">
        <LogoLink />

        <div className="w-fit h-max hidden lg:flex items-center gap-[1.875rem]">
          <nav className="w-fit">
            <ul className="w-fit flex items-center gap-4">
              {headerLinks.map((item, idx) => (
                <HeaderLink key={idx} {...item} inHomePage={pathname === '/'} />
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
                        <ContactButton type="phone" onClick={() => setMenuOpen(false)} inWhiteBg />
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
  );
};

interface HeaderLinkProps {
  text: string;
  href: string;
  inLightBg?: boolean;
  afterClick?: () => void;
  inHomePage?: boolean;
}

const headerLinks: HeaderLinkProps[] = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/#about-us' },
  { text: 'Services', href: '/#services' },
  { text: 'Cofounders', href: '/#cofounders' },
  { text: 'Stories', href: '/#stories' },
  { text: 'Gallery', href: '/#gallery' },
];

const HeaderLink = ({ text, href, inLightBg, afterClick, inHomePage }: HeaderLinkProps) => {
  const [elementExists, setElementExists] = useState(false);
  const targetElRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targetDescriptor = inHomePage && href.startsWith('/#') ? href.slice(2) : '';
    targetElRef.current = document?.getElementById(targetDescriptor);
    setElementExists(!!targetElRef.current);
  }, [href, inHomePage]);

  return (
    <li className={`${href === '/' && inHomePage ? 'hidden' : ''}`}>
      <ZenButton
        variant="ghost"
        size="icon"
        className={`${inLightBg ? '' : 'hover:underline'} hover:underline-offset-4 decoration-2 decoration-primary`}
        textClassName={`typo-button capitalize ${inLightBg ? 'text-dark-primary hover:text-primary-dark' : 'text-white'}`}
        text={text}
        linkProps={{ href: elementExists ? '#' : href, preventdefault: 'true' }}
        onClick={() => {
          if (targetElRef.current) {
            targetElRef.current.scrollIntoView({ behavior: 'smooth' });
          }

          afterClick?.();
        }}
      />
    </li>
  );
};
