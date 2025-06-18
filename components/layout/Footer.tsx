'use client';
import { cn } from '@/lib/utils';
import { type ComponentProps, type SVGProps, type JSX, useEffect, useRef, useState } from 'react';
import { ZenButton } from '../atoms/ZenButton';
// import { Facebook, Instagram, Linkedin, Twitter } from '../icons';
import { LogoLink } from '../atoms/LogoLink';
import { usePathname } from 'next/navigation';

export { Footer, type FooterProps };

type FooterProps = ComponentProps<'footer'>;

const Footer = ({ className, ...props }: FooterProps) => {
  const pathname = usePathname();

  return (
    <footer className={cn('w-full zen-container bg-primary-dark text-white', className)} {...props}>
      <section className="w-full grid gap-[3.75rem] pt-16 pb-10">
        <div className="w-full grid md:grid-cols-[1fr_auto_auto] gap-[4.5rem]">
          <div className="w-fit grid gap-5">
            <LogoLink size="large" lightLogo />
            <p className="max-w-[21rem] typo-body2">
              {`Feel free to call us in working hours Mon - Fri {8:00 - 16.00}. Our team will be happy to help answer your queries`}
            </p>
            <div className="w-fit flex items-center gap-2.5">
              {socialMediaLinks.map((item, idx) => (
                <SocialMediaLink key={idx} {...item} />
              ))}
            </div>
          </div>

          {footerLinks.map((item, idx) => (
            <FooterLinksGroup key={idx} {...item} inHomePage={pathname === '/'} />
          ))}
        </div>

        <div className="w-full flex items-center justify-center sm:justify-between border-t border-white/25 pt-6">
          <div className="typo-body3 text-white/80 flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
            <p className="">Copyright &copy;{new Date().getFullYear()} EyeConnect</p>
            <p className="hidden sm:block">|</p>
            <p className="">
              Built by{' '}
              <a
                href="https://portfolio-codegiyu.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline">
                Codegiyu
              </a>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

interface SocialMediaLinkProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  href: string;
}

const socialMediaLinks: SocialMediaLinkProps[] = [
  // { Icon: Facebook, href: 'https://www.facebook.com' },
  // { Icon: Twitter, href: 'https://www.x.com' },
  // { Icon: Linkedin, href: 'https://www.linkedin.com' },
  // { Icon: Instagram, href: 'https://www.instagram.com' },
];

const SocialMediaLink = ({ Icon, href }: SocialMediaLinkProps) => {
  return (
    <ZenButton
      variant="ghost"
      size="icon"
      className="w-8 h-8 bg-primary-dark grid place-items-center rounded-full hover:scale-105 transition-all duration-300 ease-in-out"
      linkProps={{ href, target: '_blank', rel: 'noopener noreferrer' }}>
      <i className="text-white text-[0.875rem]">
        <Icon />
      </i>
    </ZenButton>
  );
};

interface FooterLink {
  text: string;
  href: string;
}
interface FooterLinksGroupProps {
  groupName: string;
  links: FooterLink[];
  inHomePage?: boolean;
}

export const footerLinks: FooterLinksGroupProps[] = [
  {
    groupName: 'Quick Links',
    links: [
      { text: 'Home', href: '/' },
      { text: 'About Us', href: '/#about-us' },
      { text: 'Services', href: '/#services' },
      { text: 'Cofounders', href: '/#cofounders' },
      { text: 'Stories', href: '/#stories' },
      { text: 'Gallery', href: '/#gallery' },
    ],
  },
];

export const FooterLinksGroup = ({ groupName, links, inHomePage }: FooterLinksGroupProps) => {
  return (
    <div className="w-fit h-fit grid gap-2.5 sm:gap-5 sm:px-5">
      <h3 className="typo-h6 text-white">{groupName}</h3>
      <nav className="w-fit">
        <ul className="w-fit grid gap-1.5">
          {links.map((link, idx) => (
            <FooterLink key={idx} {...link} inHomePage={inHomePage} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

interface FooterLinkProps {
  text: string;
  href: string;
  inHomePage?: boolean;
}

const FooterLink = ({ text, href, inHomePage }: FooterLinkProps) => {
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
        className=""
        textClassName="typo-body2 text-white/60 capitalize hover:text-white/90"
        text={text}
        linkProps={{ href: elementExists ? '#' : href, preventdefault: 'true' }}
        onClick={() => {
          if (targetElRef.current) {
            targetElRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
    </li>
  );
};
