// import { ZenButton } from '@/components/atoms/ZenButton';
import { SectionHeading } from '@/components/general/SectionHeading';
import { EyeLogo } from '@/components/icons';

export const OurServices = () => {
  return (
    <section id="services" className="zen-container bg-variant-bg/80 py-[7.5rem]">
      <div className="w-full grid gap-10 lg:gap-16 extra-padding-container">
        <div className="w-full flex items-center justify-between gap-5">
          <SectionHeading title="Innovative Eye Care for All" subtitle="Our Services" />
          {/* <ZenButton variant="secondary" text="All Services" wrapClassName="hidden lg:block" /> */}
        </div>

        <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 items-stretch gap-6">
          {services.map((item, idx) => (
            <Service key={idx} {...item} />
          ))}
        </div>

        <div className="w-full flex lg:hidden justify-end">
          {/* <ZenButton variant="secondary" text="All Services" /> */}
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
    <div className="group w-full h-full bg-light-gray-2 hover:bg-primary-dark p-5 1440:p-10 rounded-2xl">
      <div className="w-[3.125rem] aspect-square bg-primary-dark group-hover:bg-white rounded-full grid place-items-center mb-6 sm:mb-8">
        <i className="text-xl text-white group-hover:text-primary-dark">
          <EyeLogo />
        </i>
      </div>

      <h5 className="typo-h5 text-dark-primary group-hover:text-white mb-3 sm:mb-3.5">{title}</h5>
      <p className="typo-body3 text-gray-text group-hover:text-white/75">{text}</p>
    </div>
  );
};

const services: ServiceProps[] = [
  {
    title: 'Remote Eye Care & AI Diagnostics',
    text: 'We connect underserved communities to licensed eye care professionals through telemedicine. Our AI-powered platform helps detect common eye conditions early, enabling fast, accessible, and affordable care.',
  },
  {
    title: 'Community Screenings & Awareness',
    text: "We organize free visual screenings and outreach programs tailored to each community's language and culture. By training local volunteers, we raise awareness and build trust around eye health.",
  },
  {
    title: 'Sustainable Eyewear Solutions',
    text: 'We turn plastic waste into low-cost, high-quality eyeglass frames — creating jobs, reducing pollution, and delivering vital vision tools to those who need them most.',
  },
];
