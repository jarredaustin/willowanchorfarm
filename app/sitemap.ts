import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.willowanchorfarm.com',
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.willowanchorfarm.com/goat-meat-upstate-ny',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
