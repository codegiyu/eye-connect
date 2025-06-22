'use client';

import { YoutubeStoryBtn } from '@/components/atoms/YoutubeStoryBtn';
import { ZenButton } from '@/components/atoms/ZenButton';
import { EyeLogo, HeroBlur } from '@/components/icons';
// import { Header } from '@/components/layout/Header';
import { useYoutubeStore, YoutubeVideoDetails } from '@/lib/store/useYoutubeStore';

export const OUR_STORY_DETAILS: YoutubeVideoDetails = {
  embedUrl: 'https://www.youtube.com/embed/f-1VlUNHowg',
  title: 'Our Story',
};

export const HomeHero = () => {
  const { setVideoDetails } = useYoutubeStore(state => state.actions);

  return (
    <section className="w-full min-h-[25rem] bg-hero pt-[5.625rem] lg:pt-[6.25rem]">
      {/* <Header /> */}
      <section className="hero zen-container pt-[5rem] pb-[7.5rem] relative">
        <div className="w-full extra-padding-container grid gap-10 lg:flex justify-center lg:justify-between text-white relative z-[2]">
          <div className="w-full max-w-[31.875rem] h-fit grid justify-self-center ">
            <div className="w-full grid gap-6">
              <div className="w-full grid gap-2">
                <p className="typo-subtitle uppercase">EyeConnect Initiative</p>
                <h1 className="typo-h1">Bridging The Eye Care Gap</h1>
              </div>
              <p className="w-full typo-body2 text-light-gray-1 pt-5 border-t border-light-gray">
                Bringing accessible, affordable, and sustainable eye care to underserved communities
                through AI-powered telemedicine, community-led outreach, and recycled eyewear
                solutions.
                {/* At EyeConnect, we combine innovation and empathy to restore vision,
                improve lives, and empower local change. */}
              </p>
              <div className="w-full flex items-center justify-between">
                <ZenButton text="Learn More" onClick={() => setVideoDetails(OUR_STORY_DETAILS)} />
                <YoutubeStoryBtn className="lg:hidden" />
              </div>
            </div>
          </div>

          <div className="w-full h-fit hidden lg:flex flex-col items-end justify-between">
            <div className="w-full flex items-center justify-end mb-24">
              <YoutubeStoryBtn className="hidden lg:block" />
            </div>

            <div className="w-full h-fit max-w-[19.75rem] bg-white rounded-xl overflow-hidden ml-auto">
              <div className="w-full aspect-[1.37] bg-outreach"></div>
              <div className="w-full grid gap-4 p-6">
                <div className="w-full flex items-center justify-between">
                  <h4 className="typo-body1 text-dark-primary">Core Services</h4>
                  <i className="text-primary text-xl">
                    <EyeLogo />
                  </i>
                </div>
                <div className="w-full grid gap-3">
                  <p className="w-full bg-variant-bg typo-body3 text-dark-secondary pt-2 pb-2.5 px-[1.875rem] rounded-full">
                    Tele-Eye care & AI Diagnostics
                  </p>
                  <p className="w-full bg-variant-bg typo-body3 text-dark-secondary pt-2 pb-2.5 px-[1.875rem] rounded-full">
                    Community outreach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <i className="absolute bottom-0 right-0 z-[1] text-[18rem] lg:text-[25rem]">
          <HeroBlur />
        </i>
      </section>
    </section>
  );
};
