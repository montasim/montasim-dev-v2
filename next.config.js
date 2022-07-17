/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.ibb.co'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
