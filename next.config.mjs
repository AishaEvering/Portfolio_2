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
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://hd-od-backend-651389703234.us-central1.run.app/api/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
