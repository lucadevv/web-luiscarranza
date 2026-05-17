import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#1d2024',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="540"
          height="338"
          viewBox="0 0 64 40"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <path
            d="M 6 4 L 6 36 L 24 36"
            stroke="#f5f6f7"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 54.2 10.8 A 13 13 0 1 0 54.2 29.2"
            stroke="#f5f6f7"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    {
      width: 1024,
      height: 1024,
    },
  );
}
