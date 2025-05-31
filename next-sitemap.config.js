/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://silverstonerevolutionracing.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/progress'),
    await config.transform(config, '/team'),
    await config.transform(config, '/partners'),
    await config.transform(config, '/net-zero'),
    await config.transform(config, '/contact'),
  ],
}