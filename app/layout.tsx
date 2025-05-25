import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zenlift',
  description:
    'Your path to mental wellness starts here. Odio cras proin proin sit quis fringilla aliquet. Consectetur elementum viverra egestas egestas nulla ullamcorper varius quam.',
  robots: 'index, follow, max-image-preview:large',
  authors: [
    {
      name: 'Edward-Precious Omegbu',
      url: 'https://portfolio-codegiyu.vercel.app',
    },
  ],
  openGraph: {
    type: 'website',
    url: 'https://zenlift.com',
    siteName: 'Zenlift',
    title: 'Zenlift - Your path to mental wellness starts here',
    description:
      'Your path to mental wellness starts here. Odio cras proin proin sit quis fringilla aliquet. Consectetur elementum viverra egestas egestas nulla ullamcorper varius quam.',
    images: [{ url: 'https://i.postimg.cc/0NgQhN4V/Screenshot-2025-03-24-020528.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenlift - Your path to mental wellness starts here',
    description:
      'Your path to mental wellness starts here. Odio cras proin proin sit quis fringilla aliquet. Consectetur elementum viverra egestas egestas nulla ullamcorper varius quam.',
    creator: '@TheLonerider20',
    images: ['https://i.postimg.cc/0NgQhN4V/Screenshot-2025-03-24-020528.png'],
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
        <link rel="canonical" href="https://zenlift.com" />
      </head>
      <body className={`w-full min-h-screen grid grid-rows-[auto_1fr_auto] antialiased`}>
        {children}
      </body>
    </html>
  );
}
