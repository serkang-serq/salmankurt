import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // Eğer bir sitemap (site haritası) dosyan varsa buraya ekleyebilirsin, 
    // yoksa bu sitemap satırını silebilirsin.
    sitemap: 'https://www.salmankurt.com/sitemap.xml', 
  }
}