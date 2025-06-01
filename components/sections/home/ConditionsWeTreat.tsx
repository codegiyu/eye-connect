import { ZenButton } from '@/components/atoms/ZenButton';
import { ColouredRings } from '@/components/general/ColouredRings';
import { SectionHeading } from '@/components/general/SectionHeading';

export const ConditionsWeTreat = () => {
  return (
    <section className="zen-container bg-variant-bg py-[7.5rem]">
      <div className="w-full grid gap-10 lg:gap-16 extra-padding-container">
        <div className="w-full flex items-center justify-between gap-5">
          <SectionHeading title="Conditions we treat" />
          <ZenButton variant="secondary" text="Learn More" wrapClassName="hidden lg:block" />
        </div>

        <div className="w-full grid lg:grid-cols-2 items-center gap-10">
          <div className="w-full xl:max-w-[30.1875rem] h-fit grid xl:gap-5">
            {conditions.map((item, idx) => (
              <Condition key={idx} {...item} />
            ))}
            <ZenButton
              variant="secondary"
              text="Learn More"
              wrapClassName="lg:hidden ml-auto mt-5"
            />
          </div>

          <div className="w-full min-h-[20rem] sm:min-h-[36.25rem] bg-gray-text rounded-2xl overflow-hidden relative">
            <ColouredRings />
          </div>
        </div>
      </div>
    </section>
  );
};

type ConditionProps = {
  title: string;
  text: string;
};

const Condition = ({ text, title }: ConditionProps) => {
  return (
    <div className="w-full bg-transparent hover:bg-white grid gap-5 rounded-2xl py-5 sm:py-6 xl:py-[1.875rem] px-5 sm:px-[1.875rem] lg:px-5 xl:px-[1.875rem]">
      <h4 className="typo-h5 text-dark-primary">{title}</h4>
      <p className="typo-body3 text-gray-text">{text}</p>
    </div>
  );
};

const conditions: ConditionProps[] = [
  {
    title: 'Anxiety disorders',
    text: 'Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.',
  },
  {
    title: 'Post-Traumatic Stress Disorder',
    text: 'Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.',
  },
  {
    title: 'Eating disorders',
    text: 'Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.',
  },
];
