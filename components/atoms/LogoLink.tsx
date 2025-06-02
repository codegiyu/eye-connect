import { EyeLogo } from '../icons';
import { ZenButton } from './ZenButton';

export interface LogoLinkProps {
  size?: 'default' | 'large';
  inLightBg?: boolean;
}

export const LogoLink = ({ size = 'default', inLightBg }: LogoLinkProps) => {
  return (
    <ZenButton variant="ghost" size="icon" className="" href="/">
      <div className="w-fit flex items-center gap-3 sm:gap-5">
        <i
          className={`text-[2.25rem] ${size === 'default' ? 'sm:text-[2.5rem]' : 'sm:text-[3rem]'} ${inLightBg ? 'text-primary-dark' : 'text-primary'}`}>
          <EyeLogo />
        </i>
        <h2
          className={`text-[1.75rem] ${size === 'default' ? 'sm:text-[2.25rem]' : 'sm:text-[2.5rem]'} leading-none -tracking-[0.02em] ${inLightBg ? 'text-dark-primary' : 'text-white'}`}>
          EyeConnect
        </h2>
      </div>
    </ZenButton>
  );
};
