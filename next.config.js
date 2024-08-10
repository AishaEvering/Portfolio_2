/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    // Add the fallback configuration for the fs module
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

    return config;
  },
};

module.exports = nextConfig;
