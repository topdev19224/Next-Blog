/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  distDir: 'build',
  eslint: {
    ignoreDuringBuilds: true
  },

  images: {
    unoptimized: true
  }
}

export default nextConfig
