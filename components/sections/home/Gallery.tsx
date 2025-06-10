'use client';

import { SectionHeading } from '@/components/general/SectionHeading';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Mousewheel,
  Manipulation,
  A11y,
  Pagination,
  Parallax,
  Navigation,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { cn } from '@/lib/utils';

export const Gallery = () => {
  return (
    <section id="gallery" className="zen-container bg-dark-primary text-white py-[7.5rem]">
      <div className="w-full grid gap-10 lg:gap-16 extra-padding-container">
        <div className="w-full flex items-center justify-between gap-5">
          <SectionHeading title="Stories Through Our Lens" subtitle="Our Gallery" inDarkBg />
        </div>

        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Mousewheel, Manipulation, A11y, Pagination, Parallax, Navigation, Autoplay]}
            loop={true}
            centeredSlides={true}
            navigation={true}
            mousewheel={true}
            autoplay={{ delay: 4000, disableOnInteraction: true }}
            slidesPerView={'auto'}
            spaceBetween={4}
            className="mySwiper w-full h-auto flex items-center justify-center flex-nowrap">
            {galleryImages.map((className, idx) => (
              <SwiperSlide
                key={idx}
                className={`w-full lg:max-w-[80%] transition-all duration-500 ease-in-out`}>
                <div className={cn('w-full', className)}></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const galleryImages: string[] = [
  'bg-gallery-1',
  'bg-gallery-2',
  'bg-gallery-3',
  'bg-gallery-4',
  'bg-gallery-5',
  'bg-gallery-6',
  'bg-gallery-7',
  'bg-gallery-8',
  'bg-gallery-9',
  'bg-gallery-10',
  'bg-gallery-11',
  'bg-gallery-12',
  'bg-gallery-13',
  'bg-gallery-14',
];
