/* eslint-disable import/no-default-export */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'm.media-amazon.com' }],
  },
}

export default nextConfig
