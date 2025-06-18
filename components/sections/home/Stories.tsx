// import { ZenButton } from '@/components/atoms/ZenButton';
import { GhostButton } from '@/components/atoms/GhostButton';
import { ColouredRings } from '@/components/general/ColouredRings';
import { PlayCircle } from '@/components/general/PlayCircle';
import { SectionHeading } from '@/components/general/SectionHeading';

export const Stories = () => {
  return (
    <section id="stories" className="zen-container bg-variant-bg/30 py-[7.5rem]">
      <div className="w-full grid gap-10 lg:gap-16 extra-padding-container">
        <div className="w-full flex items-center justify-between gap-5">
          <SectionHeading title="Real Stories, Real Impact" />
          {/* <ZenButton variant="secondary" text="See All" wrapClassName="hidden lg:block" /> */}
        </div>

        <div className="w-full grid lg:grid-cols-2 items-stretch gap-12 lg:gap-[1.875rem]">
          {stories.map((item, idx) => (
            <Story key={idx} {...item} />
          ))}
        </div>

        <div className="w-full flex lg:hidden justify-end">
          {/* <ZenButton variant="secondary" text="See All" /> */}
        </div>
      </div>
    </section>
  );
};

type StoryProps = {
  title: string;
  // text: string;
  imgClass: string;
  videoLink: string;
};

const Story = ({ title, imgClass, videoLink }: StoryProps) => {
  return (
    <div className="w-full grid gap-6 lg:gap-[1.875rem]">
      <GhostButton
        linkProps={{ href: videoLink, target: '_blank', rel: 'noopener noreferrer' }}
        className="w-full"
        wrapClassName="w-full">
        <div
          className={`group w-full aspect-[1.75] grid place-items-center rounded-2xl relative overflow-hidden`}>
          <div
            className={`w-full h-full ${imgClass} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-all duration-1000 ease-in-out`}
          />
          <PlayCircle className="w-[6.5rem] aspect-video scale-0 md:scale-100 rounded-2xl bg-youtube-red text-base text-white relative z-[3] transition-all duration-500 ease-linear group-hover:rounded-full group-hover:w-[3rem] md:group-hover:w-[4rem] group-hover:aspect-square group-hover:scale-100" />
          <ColouredRings side="right" />
        </div>
      </GhostButton>

      <GhostButton linkProps={{ href: videoLink, target: '_blank', rel: 'noopener noreferrer' }}>
        <div className="w-fit flex items-center gap-4">
          <PlayCircle className="w-[2.75rem] md:w-[3.625rem] bg-primary/80 text-base text-dark-secondary" />
          <h6 className="typo-h6 text-dark-secondary">{title}</h6>
        </div>
      </GhostButton>
    </div>
  );
};

const stories: StoryProps[] = [
  {
    title: 'EyeConnect Interview',
    videoLink: 'https://youtu.be/dCE-ol4i2Nc',
    imgClass: 'bg-interview',
  },
  {
    title: 'EyeConnect Beneficiaries',
    videoLink: 'https://youtu.be/3C1x8m0D3I8',
    imgClass: 'bg-beneficiaries',
  },
];
