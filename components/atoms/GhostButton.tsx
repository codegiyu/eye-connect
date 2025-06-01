import { cn } from '@/lib/utils';
import { ZenButton, ZenButtonProps } from './ZenButton';
import { IconComp } from '@/lib/types/general';

interface GhostButtonProps extends ZenButtonProps {
  iconClass?: string;
  Icon?: IconComp;
}

const GhostButton = ({ children, Icon, iconClass, className, ...props }: GhostButtonProps) => {
  return (
    <ZenButton variant="ghost" size="icon" className={cn('p-0 flex-none', className)} {...props}>
      {Icon ? (
        <i className={cn('text-2xl text-dark-primary', iconClass)}>
          <Icon />
        </i>
      ) : (
        children
      )}
    </ZenButton>
  );
};

export { GhostButton };
