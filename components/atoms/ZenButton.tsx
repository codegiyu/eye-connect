'use client';
import {
  type KeyboardEvent,
  type SVGProps,
  forwardRef,
  type ComponentProps,
  type JSX,
  MouseEvent,
} from 'react';
import { buttonVariants } from '../ui/button';
import { type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LoadingLine } from '../icons';
import Link from 'next/link';
import { omit } from 'lodash';

export interface ZenButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  LeftIcon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  RightIcon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  leftIconClass?: string;
  rightIconClass?: string;
  leftIconProps?: SVGProps<SVGSVGElement>;
  rightIconProps?: SVGProps<SVGSVGElement>;
  text?: string;
  textClassName?: string;
  children?: React.ReactNode;
  loading?: boolean;
  loadingIconBesideText?: boolean;
  loadingIconClassName?: string;
  onDisabledClick?: () => void;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  wrapClassName?: string;
  href?: string;
}

const ZenButton = forwardRef<HTMLButtonElement, ZenButtonProps>(
  (
    {
      LeftIcon,
      RightIcon,
      leftIconClass = '',
      rightIconClass = '',
      leftIconProps = {},
      rightIconProps = {},
      className = '',
      text = '',
      textClassName = '',
      children,
      variant = 'default',
      size = 'default',
      loading = false,
      loadingIconBesideText = false,
      loadingIconClassName,
      onDisabledClick,
      disabled = false,
      wrapClassName = '',
      href,
      ...props
    },
    ref
  ) => {
    const fullWrapClassName = cn(
      `inline-block ${!!onDisabledClick && disabled ? 'cursor-pointer focus-visible:outline-gray-border focus-visible:outline-1' : 'cursor-default'} focus:outline-none focus-visible:outline-white/60 focus-visible:outline-2 outline-offset-2`,
      size === 'full' ? 'w-full' : '',
      wrapClassName
    );
    const wrapProps = {
      ...(disabled && {
        tabIndex: 0,
        role: 'button',
        onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault(); // Prevent scrolling when pressing Space
            onDisabledClick?.();
          }
        },
        onClick: () => onDisabledClick?.(),
      }),
    };
    const mainEl = (
      <button
        className={cn(buttonVariants({ size, variant, className }))}
        ref={ref}
        disabled={loading || disabled}
        aria-label={props['aria-label'] || text || 'button'}
        {...omit(props, ['aria-label'])}>
        {loading && children ? (
          <i className={cn('typo-body1 text-primary-green animate-spin', loadingIconClassName)}>
            <LoadingLine />
          </i>
        ) : !loading && children ? (
          children
        ) : loading && !loadingIconBesideText ? (
          <i className={cn('typo-body1 text-primary-green animate-spin', loadingIconClassName)}>
            <LoadingLine />
          </i>
        ) : (
          <>
            {LeftIcon && (
              <i className={cn('typo-body1', leftIconClass)}>
                <LeftIcon {...leftIconProps} />
              </i>
            )}
            <div className="flex items-center gap-3">
              <span className={cn('font-marcel uppercase', textClassName)}>{text}</span>
              {loading && (
                <i
                  className={cn(
                    'typo-body1 text-primary-green animate-spin',
                    loadingIconClassName
                  )}>
                  <LoadingLine />
                </i>
              )}
            </div>
            {RightIcon && (
              <i className={cn('typo-body1', rightIconClass)}>
                <RightIcon {...rightIconProps} />
              </i>
            )}
          </>
        )}
      </button>
    );

    return (
      <>
        {href && !disabled ? (
          <Link href={href} onClick={() => props.onClick?.()} className={fullWrapClassName}>
            {mainEl}
          </Link>
        ) : (
          <div className={fullWrapClassName} {...wrapProps}>
            {mainEl}
          </div>
        )}
      </>
    );
  }
);
ZenButton.displayName = 'ZenButton';

export { ZenButton };
