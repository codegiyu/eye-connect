import { ZenButton } from '@/components/atoms/ZenButton';
import { SectionHeading } from '@/components/general/SectionHeading';

export const CTA = () => {
  return (
    <section className="w-full bg-gray-text zen-container py-[7.5rem] md:py-[14.5rem] relative">
      <div className="w-full grid gap-10">
        <SectionHeading
          subtitle="Start your journey"
          title="Begin your path to wellness"
          subtext="Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla."
          className="max-w-[45.625rem] text-center justify-items-center mx-auto"
          inDarkBg
        />
        <div className="w-fit grid gap-4 justify-items-center mx-auto">
          <ZenButton text="Schedule A Consultation" />
          <ZenButton variant="secondary" text="Contact Us" />
        </div>
      </div>
    </section>
  );
};
