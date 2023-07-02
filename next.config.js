/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**imgur.com',
            port: '',
            pathname: '/**',
            // pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: '**upload.wikimedia.org/**',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
