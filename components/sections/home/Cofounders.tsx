'use client';
import { ZenButton } from '@/components/atoms/ZenButton';
import { SectionHeading } from '@/components/general/SectionHeading';
import { Linkedin } from '@/components/icons';

export const OurCofounders = () => {
  return (
    <section id="cofounders" className="zen-container py-[7.5rem]">
      <div className="w-full grid gap-10 lg:gap-16 extra-padding-container">
        <div className="w-full flex items-center justify-between gap-5">
          <SectionHeading
            title="Visionaries Behind EyeConnect"
            subtitle="Our Cofounders"
            className="text-center justify-center justify-items-center"
          />
          {/* <ZenButton variant="secondary" text="All Services" wrapClassName="hidden lg:block" /> */}
        </div>

        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-center gap-12 sm:gap-6">
          {cofounders.map((item, idx) => (
            <CofounderDetailsBlock key={idx} {...item} />
          ))}
        </div>

        <div className="w-full flex lg:hidden justify-end">
          {/* <ZenButton variant="secondary" text="All Services" /> */}
        </div>
      </div>
    </section>
  );
};

interface CofounderDetailsBlockProps {
  name: string;
  linkedIn: string;
  vocation: string;
  imgClass: string;
  about: string[];
}

const CofounderDetailsBlock = ({
  name,
  linkedIn,
  vocation,
  imgClass,
  // about,
}: CofounderDetailsBlockProps) => {
  return (
    <div className={`w-full max-w-[25rem] h-fit grid gap-5 items-center rounded-2xl`}>
      <div className={`w-full aspect-[0.91] flex-none ${imgClass} rounded-2xl`} />
      <div className="w-full flex items-center justify-between gap-4 px-0">
        <div className="w-full grid gap-1">
          <p className="typo-body2 text-dark-primary">{name}</p>
          <p className="typo-body3 text-primary-dark">{vocation}</p>
        </div>
        {linkedIn && (
          <ZenButton
            variant="ghost"
            size="icon"
            className="w-8 h-8 bg-primary-dark grid place-items-center rounded-full hover:scale-[105%] transition-all duration-300 ease-in-out"
            linkProps={{ href: linkedIn, target: '_blank', rel: 'noopener noreferrer' }}>
            <i className="text-white text-[0.875rem]">
              <Linkedin />
            </i>
          </ZenButton>
        )}
      </div>
      {/* <p className="typo-body3 text-gray-text max-h-[3.2em] text-ellipsis overflow-hidden text-justify">
        {about[0]}
      </p> */}
      {/* <div className="flex justify-end">
        <ZenButton
          variant="ghost"
          text="Read bio ->"
          className="p-0 text-dark-primary hover:text-primary-dark"
          textClassName="capitalize"
          onClick={() => {}}
        />
      </div> */}
    </div>
  );
};

const cofounders: CofounderDetailsBlockProps[] = [
  {
    name: 'Clinton Okechukwu',
    linkedIn: 'https://www.linkedin.com/in/clinton-okechukwu',
    vocation: 'Optometrist',
    imgClass: 'bg-clinton',
    about: [
      'Clinton Okechukwu is a health advocate, researcher, and doctor who graduated summa cum laude in optometry from the University of Benin, Nigeria. He co-founded EyeConnect, an organization bridging the vision gap between underserved communities and health facilities across Nigeria. Clinton leads innovative initiatives that integrate technology and awareness to prevent avoidable blindness.',
      'His campaigns, such as #H.E.A.L the World and the First-Aid Eye Kit Campaign, have empowered schools and communities to manage ocular emergencies and reduce vision-related academic challenges. In 2022, he launched the I-CARE Campaign, focusing on healthcare, sustainability, and technology, raising cataract awareness, facilitating free surgeries, training volunteers, and providing transportation for patients in need, earning him several accolades and chosen to represent Nigeria at global summits in Cape Town and Chicago, showcasing his commitment to global health and social entrepreneurship.',
      'Currently, Clinton is developing an AI-powered telemedicine platform and advancing eco-friendly reading glasses that use recycled plastic for eyeglass frames. This innovation not only tackles plastic pollution and presbyopia but also leverages AI diagnostics to expand access to quality eye care in remote and underserved areas, amplifying his mission to eliminate preventable blindness.',
    ],
  },
  {
    name: 'Daniel Ayodele Femi',
    linkedIn: 'https://www.linkedin.com/in/daniel-ayodele-femi',
    vocation: 'Optometrist',
    imgClass: 'bg-daniel',
    about: [
      "Dr. Daniel Ayodele Femi is an optometrist and public health advocate committed to making eye care accessible across Nigeria. For over five years, he's focused on reaching underserved communities. As co-founder of Eye Connect, he co-creates digital and mobile clinics to bring vision services directly to rural areas, helping prevent unnecessary blindness.",
      'His work includes leading the Sustainable Rural Eye-Care Programme, where he organized cataract awareness campaigns and free surgeries for vulnerable groups. Through partnerships with organizations like The Pollination Project and WMI Community, his teams performed 64 sight-restoring operations and provided screenings for over 1,000 people at eye camps. He currently serves as the grant advisor for applications for The Pollination Project, helping leaders worldwide develop community health projects. Daniel also managed community programs for Eyeland of Vision Foundation, delivering vision care to 3,000+ people.',
      "Daniel aims to transform global eye health systems by advocating for policy changes, scaling technology solutions, and empowering new health leaders. His recognitions include fellowships with the United Nations Millennium Fellowship, Clinton Global Initiative University, and U.S. Consulate's Carrington Youth Program. On the Wells Mountain Initiative’s Global Advisory Board, he supports student-led professional development. His goal remains to eliminate preventable blindness through community-driven solutions.",
    ],
  },
];
