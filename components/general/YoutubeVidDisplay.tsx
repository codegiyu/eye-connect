'use client';

import { useYoutubeStore } from '@/lib/store/useYoutubeStore';
import { Dialog, DialogClose, DialogContent, DialogTitle } from '../ui/dialog';
import { GhostButton } from '../atoms/GhostButton';
import { XIcon } from 'lucide-react';

export const YoutubeVidDisplay = () => {
  const {
    videoDetails,
    actions: { setVideoDetails },
  } = useYoutubeStore(state => state);

  if (!videoDetails) return null;
  return (
    <Dialog open={!!videoDetails} onOpenChange={val => !val && setVideoDetails(null)}>
      <DialogClose asChild>
        <GhostButton className="fixed top-4 right-4 cursor-pointer z-100">
          <XIcon className="size-8" />
        </GhostButton>
      </DialogClose>
      <DialogContent
        className="lg:max-w-[80%] bg-transparent rounded-2xl h-fit max-h-[80%] grid overflow-hidden"
        role="presentation"
        aria-describedby={undefined}>
        <DialogTitle className="sr-only">{videoDetails.title}</DialogTitle>
        <section className={`w-full h-full overflow-hidden grid`}>
          <section className=""></section>

          <section className="w-full h-full overflow-hidden">
            <section className="h-full scrollbar-none">
              <div className="">
                <div className="w-full aspect-[1.75]">
                  <iframe
                    className="w-full h-full rounded"
                    src={videoDetails.embedUrl}
                    title={videoDetails.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>
          </section>
        </section>
      </DialogContent>
    </Dialog>
  );
};
