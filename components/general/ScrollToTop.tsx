'use client';
import { ComponentPropsWithRef, MouseEvent, useEffect, useState } from 'react';
import { ZenButton } from '../atoms/ZenButton';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ScrollToTopProps extends ComponentPropsWithRef<'button'> {
  triggerOffset?: number;
  wrapClassName?: string;
}

export const ScrollToTop = ({
  triggerOffset,
  className,
  wrapClassName,
  onClick,
  children,
  ...props
}: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (e?: MouseEvent<HTMLButtonElement>) => {
    scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (e && onClick) onClick(e);
  };

  useEffect(() => {
    const handlePageOffset = () => {
      const { scrollY, innerHeight } = window;
      setIsVisible(scrollY > (triggerOffset ?? innerHeight));
    };

    handlePageOffset();
    window.addEventListener('scroll', handlePageOffset);

    return () => window.removeEventListener('scroll', handlePageOffset);
  }, [triggerOffset]);

  return (
    <ZenButton
      className={cn(
        'w-12 md:w-16 aspect-[0.9] bg-primary-dark rounded-[10px] grid place-items-center \
        transition-all duration-500 ease-out',
        className
      )}
      wrapClassName={cn(
        'group fixed bottom-10 right-5 md:right-10 transition-all duration-500 ease-out',
        `${isVisible ? 'scale-100 hover:scale-105' : 'scale-0'}`,
        wrapClassName
      )}
      onClick={handleClick}
      {...props}>
      {children ? (
        children
      ) : (
        <ChevronUp className="text-white size-6 md:size-8 group-hover:scale-125 transition-all duration-500 ease-in" />
      )}
    </ZenButton>
  );
};
