/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://www.europerelocator.com",
  generateRobotsTxt: true // (optional)
  // ...other options
};
