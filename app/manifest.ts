import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Luis Carranza, LLC',
    short_name: 'Luis Carranza',
    description:
      'Delaware-registered software company building digital solutions for enterprises, startups, and governments worldwide.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fbfbfd',
    theme_color: '#1d2024',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    lang: 'en',
    orientation: 'portrait',
  };
}
