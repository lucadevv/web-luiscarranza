import Image from 'next/image';
import LCMark from './LCMark';

type Props = {
  className?: string;
  photoSrc?: string;
  photoAlt?: string;
};

export default function LCMonogram({
  className = '',
  photoSrc,
  photoAlt = 'Luis Ivan Carranza Saldaña',
}: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        background: 'var(--color-bg-dark)',
        aspectRatio: '1 / 1',
      }}
    >
      {photoSrc ? (
        <Image
          src={photoSrc}
          alt={photoAlt}
          fill
          priority
          sizes="(max-width: 640px) 280px, 360px"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <LCMark
            title="Luis Carranza monogram"
            style={{
              width: '62%',
              height: 'auto',
              color: 'var(--color-fg-on-dark)',
            }}
          />
        </div>
      )}

      <div
        aria-hidden="true"
        className="absolute"
        style={{
          bottom: '24px',
          left: '24px',
          right: '24px',
          height: '1px',
          background: photoSrc
            ? 'rgba(255, 255, 255, 0.4)'
            : 'var(--color-border-on-dark)',
          mixBlendMode: photoSrc ? 'overlay' : 'normal',
        }}
      />
    </div>
  );
}
