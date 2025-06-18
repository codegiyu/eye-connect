import './globals.css';
import { Metas } from './Metas';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Metas />
      <body className={`w-full min-h-screen grid grid-rows-[auto_1fr_auto] antialiased`}>
        {children}
      </body>
    </html>
  );
}
