/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["localhost", "picsum.photos"],
  },
};

module.exports = nextConfig;
