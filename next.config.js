/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    logging: {
        level: 'verbose'
    }
  }
};

module.exports = nextConfig;
