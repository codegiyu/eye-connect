import { cn } from '@/lib/utils';

export interface PlayCircleProps {
  className: string; // width, bg, triangle-size and color
}

export const PlayCircle = ({ className }: PlayCircleProps) => {
  return (
    <div
      className={cn(
        'w-12 aspect-square bg-primary/80 rounded-full grid place-items-center text-base text-dark-secondary',
        className
      )}>
      <svg width="1em" height="1em" viewBox="0 0 24 24">
        <polygon points="0,0 24,12 0,24" fill="currentColor" />
      </svg>
    </div>
  );
};
