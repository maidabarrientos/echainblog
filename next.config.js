/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'vnoclogos.s3-us-west-1.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'contrib.com'
      },
    ]
  }
}
module.exports = nextConfig;
