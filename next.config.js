/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // pages/index.tsxからhome/index.tsxにドメイン/の向き先変更
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
    ];
  },
};

module.exports = nextConfig;
