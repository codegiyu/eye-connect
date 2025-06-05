import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap leading-none transition-all cursor-pointer focus:outline-none focus-visible:outline-white focus-visible:outline-2 outline-offset-2 disabled:pointer-events-none disabled:opacity-50 blur-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-dark-secondary',
        secondary: 'bg-dark-primary text-white',
        ghost: '',
      },
      size: {
        default: 'px-[1.875rem] py-5 rounded-full gap-2',
        icon: '',
        full: 'w-full px-[1.875rem] py-5 rounded-full gap-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants, type ButtonProps };
