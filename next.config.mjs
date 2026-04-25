/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'image.pollinations.ai' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap'],
  },
};

export default nextConfig;
