/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'icon.horse',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'media.discordapp.net',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'api.qrserver.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
