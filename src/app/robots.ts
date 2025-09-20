import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://portfolio-site-5a96pv9uj-terence-s-projects-e20ec262.vercel.app/sitemap.xml',
  };
}
