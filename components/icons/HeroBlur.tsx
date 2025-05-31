import type { SVGProps } from 'react';
const SvgHeroBlur = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    // height="1em"
    fill="none"
    viewBox="0 0 510 510"
    {...props}>
    <foreignObject width={839.064} height={855.907} x={0.041} y={0.16}>
      <div
        // xmlns="http://www.w3.org/1999/xhtml"
        style={{
          backdropFilter: 'blur(15px)',
          clipPath: 'url(#hero-blur_svg__a)',
          height: '100%',
          width: '100%',
        }}
      />
    </foreignObject>
    <g data-figma-bg-blur-radius={30} filter="url(#hero-blur_svg__b)">
      <path
        fill="#D8FF9A"
        d="M352.13 604.027c-61.237-18.421-91.667-100.214-99.228-138.808-15.469-49.027 32.751-108.647 121.233-123.239 88.483-14.593 57.728-86.142 157-91.715 79.418-4.458 60.315 133.851 40.837 203.563-47.766 57.742-158.606 168.62-219.842 150.199"
      />
    </g>
    <defs>
      <clipPath id="hero-blur_svg__a" transform="translate(-.041 -.16)">
        <path d="M352.13 604.027c-61.237-18.421-91.667-100.214-99.228-138.808-15.469-49.027 32.751-108.647 121.233-123.239 88.483-14.593 57.728-86.142 157-91.715 79.418-4.458 60.315 133.851 40.837 203.563-47.766 57.742-158.606 168.62-219.842 150.199" />
      </clipPath>
      <filter
        id="hero-blur_svg__b"
        width={839.064}
        height={855.907}
        x={0.041}
        y={0.16}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse">
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur result="effect1_foregroundBlur_7_25" stdDeviation={125} />
      </filter>
    </defs>
  </svg>
);
export default SvgHeroBlur;
