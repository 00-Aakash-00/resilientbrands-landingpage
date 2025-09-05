import { NextResponse } from 'next/server'

export async function GET() {
  const siteUrl = 'https://www.resilientbrands.ai'
  
  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Resilient Brands - AI Market Research for Startups</title>
    <link>${siteUrl}</link>
    <description>Latest updates and insights from Resilient Brands - Your AI-powered startup validation platform</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    
    <item>
      <title>Introducing Resilient Brands - AI-Powered Market Research</title>
      <link>${siteUrl}</link>
      <description>Get instant market research reports with TAM/SAM/SOM calculations, competitor analysis, and business plans powered by AI.</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${siteUrl}/#launch</guid>
      <dc:creator>Resilient Brands Team</dc:creator>
    </item>
    
    <item>
      <title>Three Pricing Plans to Fit Your Needs</title>
      <link>${siteUrl}/#pricing</link>
      <description>Choose from Entrepreneur ($95), Serial Entrepreneur ($159/year), or Professional ($499) plans based on your startup needs.</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${siteUrl}/#pricing-announcement</guid>
      <dc:creator>Resilient Brands Team</dc:creator>
    </item>
    
    <item>
      <title>How to Validate Your Startup Idea with AI</title>
      <link>${siteUrl}/#features</link>
      <description>Learn how Resilient Brands uses AI to help you validate startup ideas, analyze competitors, and create business plans in minutes.</description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <guid>${siteUrl}/#how-to-validate</guid>
      <dc:creator>Resilient Brands Team</dc:creator>
    </item>
  </channel>
</rss>`

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}