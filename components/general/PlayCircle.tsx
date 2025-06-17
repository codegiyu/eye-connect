import { cn } from '@/lib/utils';

export interface PlayCircleProps {
  className: string; // width, bg, triangle-size and color
}

export const PlayCircle = ({ className }: PlayCircleProps) => {
  return (
    <div className={cn('aspect-square rounded-full grid place-items-center', className)}>
      <svg width="1em" height="1em" viewBox="0 0 24 24">
        <polygon points="0,0 24,12 0,24" fill="currentColor" />
      </svg>
    </div>
  );
};
