import { cn } from '@/lib/utils';
import type { ComponentProps, SVGProps, JSX } from 'react';
import { ZenButton } from '../atoms/ZenButton';
// import { Facebook, Instagram, Linkedin, Twitter } from '../icons';
import { LogoLink } from '../atoms/LogoLink';

export { Footer, type FooterProps };

type FooterProps = ComponentProps<'footer'>;

const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn('w-full zen-container bg-variant-bg', className)} {...props}>
      <section className="w-full grid gap-[3.75rem] pt-16 pb-10">
        <div className="w-full grid md:grid-cols-[1fr_auto_auto] gap-[4.5rem]">
          <div className="w-fit grid gap-5">
            <LogoLink size="large" inLightBg />
            <p className="max-w-[21rem] typo-body2 text-gray-text">
              {`Feel free to call us in working hours Mon - Fri {8:00 - 16.00}. Our team will be happy to help answer your queries`}
            </p>
            <div className="w-fit flex items-center gap-2.5">
              {socialMediaLinks.map((item, idx) => (
                <SocialMediaLink key={idx} {...item} />
              ))}
            </div>
          </div>

          {footerLinks.map((item, idx) => (
            <FooterLinksGroup key={idx} {...item} />
          ))}
        </div>

        <div className="w-full flex items-center justify-center sm:justify-between border-t border-dark-primary/20 pt-6">
          <div className="typo-body3 text-dark-secondary flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
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
  link: string;
}

const socialMediaLinks: SocialMediaLinkProps[] = [
  // { Icon: Facebook, link: 'https://www.facebook.com' },
  // { Icon: Twitter, link: 'https://www.x.com' },
  // { Icon: Linkedin, link: 'https://www.linkedin.com' },
  // { Icon: Instagram, link: 'https://www.instagram.com' },
];

const SocialMediaLink = ({ Icon, link }: SocialMediaLinkProps) => {
  return (
    <ZenButton
      variant="ghost"
      size="icon"
      className="w-8 h-8 bg-primary-dark grid place-items-center rounded-full hover:scale-105 transition-all duration-300 ease-in-out"
      href={link}>
      <i className="text-white text-[0.875rem]">
        <Icon />
      </i>
    </ZenButton>
  );
};

interface FooterLink {
  text: string;
  link: string;
}
interface FooterLinksGroupProps {
  groupName: string;
  links: FooterLink[];
}

export const footerLinks: FooterLinksGroupProps[] = [
  {
    groupName: 'Quick Links',
    links: [
      { text: 'Home', link: '/' },
      { text: 'About Us', link: '/#about-us' },
      { text: 'Services', link: '/#services' },
      { text: 'Cofounders', link: '/#cofounders' },
      { text: 'Gallery', link: '/#gallery' },
      // { text: 'Learn More', link: '/#learn-more' },
    ],
  },
];

export const FooterLinksGroup = ({ groupName, links }: FooterLinksGroupProps) => {
  return (
    <div className="w-fit h-fit grid gap-2.5 sm:gap-5 sm:px-5">
      <h3 className="typo-h6 text-dark-primary">{groupName}</h3>
      <nav className="w-fit grid gap-2.5">
        {links.map(({ text, link }, idx) => (
          <ZenButton
            key={idx}
            variant="ghost"
            size="icon"
            className=""
            textClassName="typo-body2 text-dark-secondary capitalize hover:text-dark-secondary/80"
            text={text}
            href={link}
          />
        ))}
      </nav>
    </div>
  );
};
