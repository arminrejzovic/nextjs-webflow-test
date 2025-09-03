import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
const baseUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.closetworld.com" : 'https://closet-world.webflow.io'
const currentDate = new Date()

return [
	{
		url: baseUrl + '/locations-map-app',
		lastModified: currentDate,
		changeFrequency: 'daily',
		priority: 1.0,
	},
]
} 