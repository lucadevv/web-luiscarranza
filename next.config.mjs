/** @type {import('next').NextConfig} */

// Content Security Policy — restrictive but compatible with Firebase Analytics, Google Tag Manager, Resend
// Adjust if you add other 3rd-party scripts.
const cspDirectives = [
  "default-src 'self'",
  // Scripts: Next.js inline + Firebase/GA endpoints
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.firebaseapp.com",
  // Styles: inline allowed (Next.js + Tailwind v4 use inline styles)
  "style-src 'self' 'unsafe-inline'",
  // Images: self + data URIs + Google Analytics tracking pixels
  "img-src 'self' data: blob: https://www.google-analytics.com https://*.googleusercontent.com",
  // Fonts: self only (Geist self-hosted via next/font)
  "font-src 'self' data:",
  // XHR/Fetch: Firebase + Google Analytics
  "connect-src 'self' https://*.firebaseio.com https://*.googleapis.com https://www.google-analytics.com https://region1.google-analytics.com https://firebaseinstallations.googleapis.com",
  // Frames: nothing
  "frame-src 'none'",
  // Forms: only same-origin
  "form-action 'self'",
  // Block all <object>, <embed>, <applet>
  "object-src 'none'",
  // Block <base> hijacking
  "base-uri 'self'",
  // Force HTTPS for all subresources
  'upgrade-insecure-requests',
].join('; ');

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Content-Security-Policy', value: cspDirectives },
        ],
      },
      {
        source: '/founder.jpg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
        ],
      },
      {
        source: '/rss.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=3600' },
        ],
      },
    ];
  },
};

export default nextConfig;
