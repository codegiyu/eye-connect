import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EyeConnect Initiative',
  description:
    'Bringing accessible, affordable, and sustainable eye care to underserved communities\
    through AI-powered telemedicine, community-led outreach, and recycled eyewear\
    solutions.',
  keywords: ['eye', 'eyeconnect', 'eye-connect', 'eye connect', 'telemedicine', 'eye care'],
  robots: 'index, follow, max-image-preview:large',
  authors: [
    {
      name: 'Edward-Precious Omegbu',
      url: 'https://portfolio-codegiyu.vercel.app',
    },
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.eyeconnectglobal.com',
    siteName: 'EyeConnect Initiative',
    title: 'EyeConnect Initiative - Bridging The Eye Care Gap',
    description:
      'Bringing accessible, affordable, and sustainable eye care to underserved communities\
      through AI-powered telemedicine, community-led outreach, and recycled eyewear\
      solutions.',
    images: [{ url: 'https://i.postimg.cc/TYYthV3v/Screenshot-2025-06-02-042103.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EyeConnect Initiative - Bridging The Eye Care Gap',
    description:
      'Bringing accessible, affordable, and sustainable eye care to underserved communities\
      through AI-powered telemedicine, community-led outreach, and recycled eyewear\
      solutions.',
    creator: '@TheLonerider20',
    images: ['https://i.postimg.cc/TYYthV3v/Screenshot-2025-06-02-042103.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="canonical" href="https://www.eyeconnectglobal.com" />
      </head>
      <body className={`w-full min-h-screen grid grid-rows-[auto_1fr_auto] antialiased`}>
        {children}
      </body>
    </html>
  );
}
