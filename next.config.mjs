/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // If you use external images (like Unsplash) with next/image, add domains here:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;