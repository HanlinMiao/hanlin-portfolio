/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ['@react-email/render', '@react-email/tailwind']
    },
}

module.exports = nextConfig
