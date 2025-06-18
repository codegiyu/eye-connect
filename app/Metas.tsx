'use client';

import { PageMetas, PageMetasProps } from '@/components/general/PageMetas';
import { usePathname } from 'next/navigation';

export const Metas = () => {
  const pathname = usePathname();

  const metas = pagesMetaData[pathname.startsWith('/customers/') ? '/customers/:id' : pathname];

  return (
    <PageMetas
      title={metas?.title || 'EyeConnect Initiative'}
      description={metas?.description || defaultDescription}
    />
  );
};

const defaultDescription =
  'Bringing accessible, affordable, and sustainable eye care to underserved communities\
  through AI-powered telemedicine, community-led outreach, and recycled eyewear\
  solutions.';

const pagesMetaData: Record<string, PageMetasProps> = {};
