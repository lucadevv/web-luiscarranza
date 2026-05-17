import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Luis Carranza, LLC — Software, engineered.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#fbfbfd',
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 88px',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            color: '#1d2024',
          }}
        >
          <svg
            width="80"
            height="50"
            viewBox="0 0 64 40"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
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
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'center',
            marginTop: '-24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 124,
              fontWeight: 600,
              letterSpacing: '-5px',
              lineHeight: 1.04,
              color: '#1d2024',
            }}
          >
            Software, engineered.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 34,
              fontWeight: 400,
              lineHeight: 1.42,
              letterSpacing: '-0.6px',
              color: '#62656b',
              marginTop: 28,
              maxWidth: 880,
            }}
          >
            Digital systems for enterprises, startups, and governments.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              fontWeight: 500,
              color: '#62656b',
              letterSpacing: '-0.3px',
            }}
          >
            Luis Carranza, LLC
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              fontWeight: 500,
              color: '#1d2024',
              letterSpacing: '-0.3px',
            }}
          >
            luiscarranza.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
