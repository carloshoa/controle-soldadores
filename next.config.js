/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.promoview.com.br', 'lh3.googleusercontent.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://controle-soldadores-tbt.vercel.app/:path*',
      },
    ]
  },

}

module.exports = nextConfig
