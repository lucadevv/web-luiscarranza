import type { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  title?: string;
};

export default function LCMark({ title = 'Luis Carranza', ...props }: Props) {
  return (
    <svg
      viewBox="0 0 64 40"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-label={title}
      {...props}
    >
      <path
        d="M 6 4 L 6 36 L 24 36"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 54.2 10.8 A 13 13 0 1 0 54.2 29.2"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}
