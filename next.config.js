/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ecestaticos.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      },
    ],
  },
  i18n: {
    locales: ['es', 'en', 'fr'],
    defaultLocale: 'es',
  },
}

module.exports = nextConfig
