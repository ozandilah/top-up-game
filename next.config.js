/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
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
