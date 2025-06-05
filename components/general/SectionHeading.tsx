import { cn } from '@/lib/utils';
import { EyeLogo } from '../icons';

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  subtext?: string;
  className?: string;
  inDarkBg?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  subtext,
  className,
  inDarkBg,
}: SectionHeadingProps) => {
  return (
    <div className={cn('w-full grid gap-2 sm:gap-3.5', className)}>
      {subtitle && (
        <div className="w-fit flex items-center gap-2 sm:gap-4">
          <i className="text-[0.875rem] sm:text-[1.25rem] text-primary-dark">
            <EyeLogo />
          </i>
          <span
            className={`typo-subtitle uppercase ${inDarkBg ? 'text-light-gray-2' : 'text-dark-secondary'}`}>
            {subtitle}
          </span>
        </div>
      )}
      <h2 className={`typo-h3 capitalize ${inDarkBg ? 'text-white' : 'text-dark-primary'}`}>
        {title}
      </h2>
      {subtext && (
        <p className={`typo-body2 ${inDarkBg ? 'text-light-gray-1' : 'text-gray-text'}`}>
          {subtext}
        </p>
      )}
    </div>
  );
};
