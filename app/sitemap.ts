import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://yasupachiringyo.jp/', priority: 1 },
    { url: 'https://yasupachiringyo.jp/akiya/', priority: 0.9 },
  ];
}
