/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'roomify.org',
            pathname: '/**',
          },
        ],
      },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;