/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

process.on('unhandledRejection', error => {
	console.log('unhandledRejection', error);
});

export default nextConfig
