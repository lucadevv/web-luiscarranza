'use client';

import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFlutter,
  SiPython,
  SiApple,
  SiAndroid,
  SiDocker,
} from 'react-icons/si';
import type { ComponentType, SVGProps } from 'react';
import { useI18n } from '@/providers/I18nProvider';

type TechItem = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
};

const items: TechItem[] = [
  { Icon: SiTypescript, label: 'TypeScript' },
  { Icon: SiReact, label: 'React' },
  { Icon: SiNextdotjs, label: 'Next.js' },
  { Icon: SiNodedotjs, label: 'Node.js' },
  { Icon: SiFlutter, label: 'Flutter' },
  { Icon: SiPython, label: 'Python' },
  { Icon: SiApple, label: 'iOS' },
  { Icon: SiAndroid, label: 'Android' },
  { Icon: SiDocker, label: 'Docker' },
];

export default function TechStack() {
  const { lang } = useI18n();
  const label = lang === 'es' ? 'Construido con' : 'Built with';

  return (
    <div
      className="mx-auto w-full"
      style={{
        marginTop: 'clamp(3rem, 6vw, 5rem)',
        animation: 'lc-rise 700ms 240ms var(--ease-out-strong) both',
      }}
    >
      <div
        className="text-center"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11.5px',
          fontWeight: 500,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--color-fg-3)',
          marginBottom: 'clamp(1.25rem, 2vw, 1.75rem)',
        }}
      >
        {label}
      </div>

      <ul
        className="flex flex-wrap items-center justify-center list-none"
        style={{
          gap: 'clamp(1.75rem, 3.5vw, 3rem)',
        }}
      >
        {items.map((item, index) => {
          const { Icon, label } = item;
          return (
            <li
              key={label}
              className="group"
              style={{
                animation: `lc-rise 600ms ${280 + index * 50}ms var(--ease-out-strong) both`,
              }}
            >
              <span
                aria-label={label}
                title={label}
                className="inline-flex items-center justify-center transition-colors duration-200 ease-out-strong group-hover:[color:var(--color-fg)]"
                style={{
                  color: 'var(--color-fg-3)',
                }}
              >
                <Icon
                  aria-hidden="true"
                  style={{
                    width: 'clamp(22px, 2.2vw, 28px)',
                    height: 'clamp(22px, 2.2vw, 28px)',
                  }}
                />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
