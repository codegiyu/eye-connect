export interface PageMetasProps {
  title: string;
  description: string;
}

export const PageMetas = ({ title, description }: PageMetasProps) => {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5, viewport-fit=cover"
        />
        <meta httpEquiv="Content-Security-Policy" />
        <meta name="robots" content="index, follow" />

        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="eye, eyeconnect, eye-connect, eye connect, telemedicine, eye care, eye medicine, eye glasses"
        />
        <meta name="author" content="Edward-Precious Omegbu" />
        <link rel="author" href="https://portfolio-codegiyu.vercel.app" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content="https://i.postimg.cc/TYYthV3v/Screenshot-2025-06-02-042103.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eyeconnectglobal.com" />
        <meta property="og:site_name" content="EyeConnect Initiative - Bridging The Eye Care Gap" />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/TYYthV3v/Screenshot-2025-06-02-042103.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:site" content="@YourSiteHandle"> */}
        <meta name="twitter:creator" content="@TheLonerider20" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="canonical" href="https://www.eyeconnectglobal.com" />

        <title>{title}</title>
      </head>
    </>
  );
};
