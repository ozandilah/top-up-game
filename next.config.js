/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: false,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg%/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ["example1.icodie.com"],
  },
};

module.exports = nextConfig;
