import type { Metadata } from "next";
import "./globals.css";
import { NetworkBar } from '@/components/NetworkBar';

export const metadata: Metadata = {
  title: {
    default: "The LV Athletics -- Las Vegas A's Fan Hub",
    template: "%s | The LV Athletics",
  },
  description: "Your home for Las Vegas Athletics news, stadium updates, roster coverage, and fan guides. Independent. Local. Las Vegas.",
  metadataBase: new URL("https://thelvathletics.com"),
  alternates: {
    canonical: "https://thelvathletics.com",
  },
  openGraph: {
    type: "website",
    siteName: "The LV Athletics",
    url: "https://thelvathletics.com",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The LV Athletics",
          "url": "https://thelvathletics.com",
          "description": "Las Vegas Athletics fan hub. News, stadium updates, roster coverage, and fan guides."
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "The LV Athletics",
          "url": "https://thelvathletics.com"
        }) }} />
      </head>
      <body>
        <NetworkBar />
        <div style={{ paddingTop: '28px' }}>{children}</div>
      </body>
    </html>
  );
}
