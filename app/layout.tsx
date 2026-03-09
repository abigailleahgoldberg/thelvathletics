import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The LV Athletics -- Las Vegas A's Fan Hub",
    template: "%s | The LV Athletics",
  },
  description: "Your home for Las Vegas Athletics news, stadium updates, roster coverage, and fan guides. Independent. Local. Las Vegas.",
  metadataBase: new URL("https://thelvathletics.com"),
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
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
