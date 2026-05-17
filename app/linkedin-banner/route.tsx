import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#fbfbfd',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '60px 96px',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <svg
            width="160"
            height="100"
            viewBox="0 0 64 40"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              d="M 6 4 L 6 36 L 24 36"
              stroke="#1d2024"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 54.2 10.8 A 13 13 0 1 0 54.2 29.2"
              stroke="#1d2024"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>

          <div
            style={{
              display: 'flex',
              width: '2px',
              height: '110px',
              background: '#e1e3e8',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div
              style={{
                display: 'flex',
                fontSize: 76,
                fontWeight: 600,
                letterSpacing: '-3.5px',
                lineHeight: 1,
                color: '#1d2024',
              }}
            >
              Software, engineered.
            </div>
            <div
              style={{
                display: 'flex',
                fontSize: 26,
                fontWeight: 400,
                letterSpacing: '-0.4px',
                color: '#62656b',
              }}
            >
              Luis Carranza, LLC · Delaware, USA · luiscarranza.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1584,
      height: 396,
    },
  );
}
