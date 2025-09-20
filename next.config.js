/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/portfolio',
        destination: '/projects/portfolio',
      },
      {
        source: '/job-tracker',
        destination: '/projects/job-tracker',
      },
      {
        source: '/unit-converter',
        destination: '/projects/unit-converter',
      },
    ];
  },
};

module.exports = nextConfig;
