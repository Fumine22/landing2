/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "technext.github.io",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
