import { ScrollToTop } from '@/components/general/ScrollToTop';
import { MainLayout } from '@/components/layout/MainLayout';
import { AboutUs } from '@/components/sections/home/AboutUs';
import { OurCofounders } from '@/components/sections/home/Cofounders';
import { Gallery } from '@/components/sections/home/Gallery';
import { HomeHero } from '@/components/sections/home/Hero';
import { OurServices } from '@/components/sections/home/Services';
import { Stories } from '@/components/sections/home/Stories';

export default function Home() {
  return (
    <MainLayout hideHeader>
      <HomeHero />
      <AboutUs />
      <OurServices />
      <OurCofounders />
      <Stories />
      <Gallery />
      <ScrollToTop />
    </MainLayout>
  );
}
