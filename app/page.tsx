import { MainLayout } from '@/components/layout/MainLayout';
import { AboutUs } from '@/components/sections/home/AboutUs';
import { OurCofounders } from '@/components/sections/home/Cofounders';
import { Gallery } from '@/components/sections/home/Gallery';
import { OurServices } from '@/components/sections/home/Services';
import { Stories } from '@/components/sections/home/Stories';

export default function Home() {
  return (
    <MainLayout>
      <AboutUs />
      <OurServices />
      <OurCofounders />
      <Stories />
      <Gallery />
    </MainLayout>
  );
}
