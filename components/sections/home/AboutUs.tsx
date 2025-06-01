import { SectionHeading } from '@/components/general/SectionHeading';
import { ZenliftLogoStar } from '@/components/icons';

export const AboutUs = () => {
  return (
    <section className="zen-container py-[7.5rem]">
      <div className="w-full extra-padding-container">
        <div className="w-full grid lg:grid-cols-2 items-stretch justify-between gap-10">
          <div className="w-full xl:max-w-[38.9375rem] h-full flex flex-col justify-between gap-10">
            <SectionHeading subtitle="About Us" title="Transforming lives through care" />
            <div className="w-full h-fit grid sm:grid-cols-[14.5rem_1fr] lg:grid-cols-1 xl:grid-cols-[14.5rem_1fr] gap-10 items-center rounded-2xl border border-border">
              <div className="w-full h-full min-h-[16.875rem] flex-none bg-gray-text rounded-2xl overflow-hidden"></div>
              <div className="w-full grid gap-4 px-5 sm:px-0 lg:px-5 xl:px-0 sm:pr-10 xl:pr-10 pb-5 pt-0 sm:pt-5 lg:pt-0 xl:pt-5">
                <h3 className="typo-h6 text-dark-primary">Welcome Message from Our CEO</h3>
                <p className="typo-body3 text-gray-text">
                  Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh
                  ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac
                  ultricies sem nulla.
                </p>
                <div className="w-full grid gap-1">
                  <p className="typo-body2 text-dark-primary">Joseph Doolenan</p>
                  <p className="typo-body3 text-primary-dark">CEO, Zenlift</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full xl:max-w-[28.9375rem] h-fit justify-self-end grid gap-10">
            <div className="w-full bg-primary-light py-5 px-5 sm:px-10 lg:px-5 1440:px-10 rounded-2xl">
              <h3 className="typo-h5 text-dark-primary">Our Mission</h3>
            </div>
            <ul className="w-full grid gap-10 px-5 sm:px-10 lg:px-5 1440:px-10">
              {missionStatements.map((item, idx) => (
                <MissionStatement key={idx} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

type MissionStatementProps = {
  title: string;
  text: string;
};

const MissionStatement = ({ text, title }: MissionStatementProps) => {
  return (
    <li className="">
      <div className="w-full grid gap-2 sm:gap-4">
        <div className="w-fit flex items-center gap-2 sm:gap-4">
          <i className="text-[1rem] sm:text-[1.25rem] text-primary-dark">
            <ZenliftLogoStar />
          </i>
          <span className={`typo-h6 text-dark-primary`}>{title}</span>
        </div>
        <p className={`typo-body3 text-gray-text`}>{text}</p>
      </div>
    </li>
  );
};

const missionStatements: MissionStatementProps[] = [
  {
    title: 'Promoting Mental Wellness',
    text: 'Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.',
  },
  {
    title: 'Empowering Individuals',
    text: 'Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.',
  },
  {
    title: 'Supporting Personal Growth',
    text: 'Vulputate bibendum erat morbi interdum diam sit. Eu sit dolor vel sodales sed nibh ut. Ac fringilla fames eget a aliquet. Gravida placerat viverra purus sed ac ultricies sem nulla.',
  },
];
