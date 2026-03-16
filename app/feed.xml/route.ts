import { NextResponse } from 'next/server';
import { getAllPosts } from '../blog/data';

export async function GET() {
  const siteUrl = 'https://thelvathletics.com';
  const siteName = 'The LV Athletics';
  const siteDescription = 'Las Vegas sports coverage, athlete spotlights, and local athletics news.';

  const posts = getAllPosts();
  const items = posts.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${siteUrl}/blog/${post.slug}</guid>
    </item>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteName}</title>
    <link>${siteUrl}</link>
    <description>${siteDescription}</description>
    <language>en-us</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>${items}
  </channel>
</rss>`;

  return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } });
}
