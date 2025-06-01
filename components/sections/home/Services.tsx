import { ZenButton } from '@/components/atoms/ZenButton';
import { SectionHeading } from '@/components/general/SectionHeading';
import { ZenliftLogoStar } from '@/components/icons';

export const OurServices = () => {
  return (
    <section className="zen-container py-[7.5rem]">
      <div className="w-full grid gap-10 lg:gap-16 extra-padding-container">
        <div className="w-full flex items-center justify-between gap-5">
          <SectionHeading title="Holistic Mental Health Solutions" subtitle="Our Services" />
          <ZenButton variant="secondary" text="All Services" wrapClassName="hidden lg:block" />
        </div>

        <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 items-stretch gap-6">
          {services.map((item, idx) => (
            <Service key={idx} {...item} />
          ))}
        </div>

        <div className="w-full flex lg:hidden justify-end">
          <ZenButton variant="secondary" text="All Services" />
        </div>
      </div>
    </section>
  );
};

type ServiceProps = {
  title: string;
  text: string;
};

const Service = ({ text, title }: ServiceProps) => {
  return (
    <div className="w-full h-full bg-light-gray-2 hover:bg-primary-light p-5 1440:p-10 rounded-2xl">
      <div className="w-[3.125rem] aspect-square bg-primary-dark rounded-full grid place-items-center mb-6 sm:mb-8">
        <i className="text-xl text-white">
          <ZenliftLogoStar />
        </i>
      </div>

      <h4 className="typo-h5 text-dark-primary mb-3 sm:mb-3.5">{title}</h4>
      <p className="typo-body3 text-gray-text">{text}</p>
    </div>
  );
};

const services: ServiceProps[] = [
  {
    title: 'Individual Therapy',
    text: 'Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.',
  },
  {
    title: 'Group Therapy',
    text: 'Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.',
  },
  {
    title: 'Family Counseling',
    text: 'Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.',
  },
  {
    title: 'Couples Counseling',
    text: 'Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.',
  },
  {
    title: 'Meditation Workshops',
    text: 'Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.',
  },
  {
    title: 'Teletherapy Services',
    text: 'Id nisl lacus penatibus bibendum vitae lectus et a. Lorem nulla nulla nulla faucibus amet feugiat ultricies. Posuere arcu enim.',
  },
];
