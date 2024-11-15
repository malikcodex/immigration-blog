/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["res.cloudinary.com"]
    },
    eslint: {
        ignoreDuringBuilds: true, // This will ignore ESLint errors during builds
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '2mb',
        }
    },
};

export default nextConfig;
