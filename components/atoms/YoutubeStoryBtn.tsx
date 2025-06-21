'use client';

import { useYoutubeStore } from '@/lib/store/useYoutubeStore';
import { GhostButton } from './GhostButton';
import { OUR_STORY_DETAILS } from '../sections/home/Hero';
import { cn } from '@/lib/utils';

export const YoutubeStoryBtn = ({ className }: { className?: string }) => {
  const { setVideoDetails } = useYoutubeStore(state => state.actions);

  return (
    <GhostButton onClick={() => setVideoDetails(OUR_STORY_DETAILS)} className={cn('', className)}>
      <div className="group w-fit flex items-center gap-5">
        <p className="typo-body2 text-white hidden sm:block group-hover:text-variant-bg">
          Watch Our Story
        </p>
        <div className="w-[3.75rem] aspect-square border-2 border-white rounded-full relative">
          <div className="w-full h-full bg-story rounded-full overflow-hidden">
            <div className="w-full h-full bg-story rounded-full group-hover:scale-105 transition-transform duration-500 ease-in-out" />
          </div>
          <div
            className="w-[1.375rem] aspect-square bg-primary rounded-full grid place-items-center absolute 
            top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 text-[0.375rem] text-dark-secondary">
            <svg width="1em" height="1em" viewBox="0 0 24 24">
              <polygon points="0,0 24,12 0,24" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </GhostButton>
  );
};
