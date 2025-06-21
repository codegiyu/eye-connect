'use client';

import { SectionHeading } from '@/components/general/SectionHeading';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
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
// import Image from 'next/image';
import { useRef, useState } from 'react';
// import { cn } from '@/lib/utils';

export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const swiperRef = useRef<SwiperRef>(null);

  return (
    <section id="gallery" className="bg-dark-primary text-white py-[7.5rem]">
      <div className="w-full grid gap-10 lg:gap-16">
        <div className="w-full extra-padding-container">
          <div className="w-full zen-container flex items-center justify-between gap-5">
            <SectionHeading title="Stories Through Our Lens" subtitle="Our Gallery" inDarkBg />
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Mousewheel, Manipulation, A11y, Pagination, Parallax, Navigation, Autoplay]}
            loop={true}
            centeredSlides={true}
            navigation={true}
            mousewheel={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            slidesPerView={'auto'}
            spaceBetween={8}
            onSwiper={swiper => {
              swiperRef.current = { swiper };
            }}
            speed={1200}
            onSlideChange={swiper => setActiveIndex(swiper.realIndex || 0)}
            className="mySwiper w-full h-auto flex items-center justify-center flex-nowrap">
            {galleryImages.map((className, idx) => {
              if (activeIndex === idx) {
                console.log({ activeIndex, idx, yes: activeIndex === idx });
              }
              return (
                <SwiperSlide
                  key={idx}
                  className={`w-full max-w-[80%] lg:max-w-[60%] aspect-[1.5] flex items-center transition-all duration-500 ease-in-out relative`}>
                  <div
                    className={`w-full ${activeIndex === idx ? 'h-full' : 'h-[80%] flex items-center'} rounded-[10px] absolute top-1/2 left-0 -translate-y-1/2 overflow-hidden`}>
                    <div
                      className={`w-[120%] aspect-1.5 ${className} object-cover ${activeIndex === idx ? 'animate-[gallery-image_4s_ease-in-out_forwards]' : ''}`}></div>
                  </div>
                </SwiperSlide>
              );
            })}
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
  // '/images/gallery/gallery-1.jpg',
  // '/images/gallery/gallery-2.jpg',
  // '/images/gallery/gallery-3.jpg',
  // '/images/gallery/gallery-4.jpg',
  // '/images/gallery/gallery-5.jpg',
  // '/images/gallery/gallery-6.jpg',
  // '/images/gallery/gallery-7.jpg',
  // '/images/gallery/gallery-8.jpg',
  // '/images/gallery/gallery-9.jpg',
  // '/images/gallery/gallery-10.jpg',
  // '/images/gallery/gallery-11.jpg',
  // '/images/gallery/gallery-12.jpg',
  // '/images/gallery/gallery-13.jpg',
  // '/images/gallery/gallery-14.jpg',
];
{
  /* <div
  className={cn(
    'w-full transition-all duration-[4000ms] ease-linear',
    className,
    'animate-[gallery-image_4s_linear_backwards]'
  )}></div> */
}
