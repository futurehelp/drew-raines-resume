/** @type {import('next').NextConfig} */
const nextConfig = { images: { remotePatterns: [{ protocol: 'https', hostname: 'www.papermag.com' }, { protocol: 'https', hostname: 'media-library.image.jpg' }] } };
export default nextConfig;
