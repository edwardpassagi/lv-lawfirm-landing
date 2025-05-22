/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/lv-lawfirm-landing',
  assetPrefix: '/lv-lawfirm-landing',
}

module.exports = nextConfig 