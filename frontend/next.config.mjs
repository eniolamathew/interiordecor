/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'roomify.org',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'pub-803b1a4a98804df48cd54488ec5dd376.r2.dev',
            pathname: '/**',
          },
        ],
      },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;