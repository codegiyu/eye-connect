import type { SVGProps } from 'react';
const SvgInstagram = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 14 14"
    {...props}>
    <path
      fill="currentColor"
      d="M9.917 1.167H4.082a2.917 2.917 0 0 0-2.916 2.916v5.833a2.917 2.917 0 0 0 2.916 2.917h5.833a2.917 2.917 0 0 0 2.917-2.917V4.083a2.917 2.917 0 0 0-2.917-2.916"
    />
    <path
      stroke="#6BA50F"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.333 6.633a2.333 2.333 0 1 1-4.616.684 2.333 2.333 0 0 1 4.616-.684"
    />
    <path
      stroke="#6BA50F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.209 3.792h.005"
    />
  </svg>
);
export default SvgInstagram;
