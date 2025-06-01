import { cn } from '@/lib/utils';
import Link from 'next/link';

export const YoutubeStoryBtn = ({ className }: { className?: string }) => {
  return (
    <Link
      href="https://youtu.be/f-1VlUNHowg?si=QygFlUMB1z8ibGme"
      className={cn('', className)}
      target="_blank"
      rel="noreferrer noopener">
      <div className="w-fit flex items-center gap-5">
        <p className="typo-body2 text-white hidden sm:block">Watch Our Story</p>
        <div className="w-[3.75rem] aspect-square border-2 border-white rounded-full relative">
          <div
            className="w-[1.375rem] aspect-square bg-primary rounded-full grid place-items-center absolute 
            top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-[0.375rem] text-dark-secondary">
            <svg width="1em" height="1em" viewBox="0 0 24 24">
              <polygon points="0,0 24,12 0,24" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};
