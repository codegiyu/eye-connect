import { MainLayout } from '@/components/layout/MainLayout';
import { AboutUs } from '@/components/sections/home/AboutUs';

export default function Home() {
  return (
    <MainLayout>
      <section className="w-full">
        <AboutUs />
      </section>
    </MainLayout>
  );
}
