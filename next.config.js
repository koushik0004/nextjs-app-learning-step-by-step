const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
	reactStrictMode: true,
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
		/**
		 * disabled for development mode,
		 * otherwise it will show lots of consle msg
		 */
		disable: process.env.NODE_ENV === 'development',
	},
});

module.exports = nextConfig;
