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
  compiler: {
    styledComponents: true, 
  },
  async headers() {
    return [
      {
        source: '/:all*(jpg|jpeg|png|gif|svg|css|js|woff|woff2|eot|ttf|otf|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;