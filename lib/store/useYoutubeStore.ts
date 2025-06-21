'use client';

import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { SelectorFn } from '../types/general';

export interface YoutubeVideoDetails {
  embedUrl: string;
  title: string;
}
export interface YoutubeStore {
  videoDetails: YoutubeVideoDetails | null;
  actions: {
    setVideoDetails: (details: YoutubeVideoDetails | null) => void;
  };
}

const defaultYoutubeStore: Omit<YoutubeStore, 'actions'> = {
  videoDetails: null,
};

export const useInitYoutubeStore = create<YoutubeStore>()(set => ({
  ...defaultYoutubeStore,
  actions: {
    setVideoDetails: videoDetails => {
      set({ videoDetails });
    },
  },
}));

export const useYoutubeStore = <T>(selector: SelectorFn<YoutubeStore, T>) => {
  const state = useInitYoutubeStore(useShallow(selector));
  return state;
};
