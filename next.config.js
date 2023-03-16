const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'ar-DZ'],
    defaultLocale: 'en-US',
  },
  images: {
    domains: ['cdn.sanity.io']
  }
}

module.exports = nextConfig