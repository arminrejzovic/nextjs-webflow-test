import { MetadataRoute } from 'next';

const isProduction = process.env.ENVIRONMENT === 'production';
const baseUrl = process.env.NEXT_PUBLIC_BASE_PATH_URL;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/${basePath}/sitemap.xml`,
  };
}