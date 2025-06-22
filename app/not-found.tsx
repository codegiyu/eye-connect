import { ZenButton } from '@/components/atoms/ZenButton';
import { MainLayout } from '@/components/layout/MainLayout';

export default function NotFound() {
  return (
    <MainLayout
      headerProps={{ solidBackground: true }}
      footerProps={{ className: 'bg-dark-secondary' }}>
      <section className="w-full h-full min-h-[60vh] grid place-items-center">
        <div className="w-fit grid gap-5">
          <h1 className="text-6xl font-bold text-dark-primary text-center">404</h1>
          <p className="text-2xl font-medium text-dark-secondary/80 text-center">Page not found</p>
          <div className="w-full flex justify-center">
            <ZenButton
              linkProps={{ href: '/' }}
              variant="secondary"
              text="Return home"
              className="w-fit mx-auto"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
