import { IconComp } from '@/lib/types/general';
import { ZenButton } from './ZenButton';
import { Mail, Phone } from '../icons';
import { MouseEvent } from 'react';

type ContactBtnType = 'mail' | 'phone';

export interface ContactButtonProps {
  type: ContactBtnType;
  inWhiteBg?: boolean;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

const contactLinks: Record<ContactBtnType, string> = {
  mail: 'mailto:codegiyu@gmail.com',
  phone: 'tel:+2348140629487',
};
const contactIcons: Record<ContactBtnType, IconComp> = {
  mail: Mail,
  phone: Phone,
};

export const ContactButton = ({ type, inWhiteBg, onClick }: ContactButtonProps) => {
  const Icon = contactIcons[type];
  const typeClassName = type !== 'phone' ? '' : inWhiteBg ? 'bg-dark-secondary/5' : 'bg-white/30';

  return (
    <ZenButton
      variant="ghost"
      size="icon"
      className={`w-[3.75rem] aspect-square ${typeClassName} grid place-items-center rounded-full border ${inWhiteBg ? 'border-dark-secondary' : 'border-white'}`}
      onClick={onClick}
      href={contactLinks[type]}>
      <i className={`text-2xl ${inWhiteBg ? 'text-dark-secondary' : 'text-white'}`}>
        <Icon />
      </i>
    </ZenButton>
  );
};
