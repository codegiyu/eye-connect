import { MainLayout } from '@/components/layout/MainLayout';
import { AboutUs } from '@/components/sections/home/AboutUs';
import { ConditionsWeTreat } from '@/components/sections/home/ConditionsWeTreat';
import { CTA } from '@/components/sections/home/CTA';
import { OurServices } from '@/components/sections/home/Services';

export default function Home() {
  return (
    <MainLayout>
      <section className="w-full">
        <AboutUs />
        <ConditionsWeTreat />
        <OurServices />
        <CTA />
      </section>
    </MainLayout>
  );
}
