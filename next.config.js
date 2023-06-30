/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'imgur.com',
            port: '',
            pathname: '/**',
            // pathname: '/account123/**',
          },
        ],
      },
}

module.exports = nextConfig
