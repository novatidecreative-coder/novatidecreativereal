import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Novatide Creative - AI Receptionist & Website Design Services",
  description: "AI-powered call answering, lead qualification, and stunning websites that convert. Everything you need to capture more leads and scale your business.",
  keywords: [
    "AI receptionist",
    "website design",
    "lead qualification",
    "business automation",
    "call answering service",
    "24/7 call answering",
    "automated appointment booking",
    "small business automation",
  ],
  authors: [{ name: "Novatide Creative" }],
  creator: "Novatide Creative",
  publisher: "Novatide Creative",
  metadataBase: new URL("https://www.novatidecreative.com"),
  alternates: {
    canonical: "https://www.novatidecreative.com",
  },
  icons: {
    icon: "/novatide_256x256.png",
    apple: "/novatide_256x256.png",
  },
  openGraph: {
    title: "Novatide Creative - AI Receptionist & Website Design Services",
    description: "AI-powered call answering, lead qualification, and stunning websites that convert. Never miss a call again.",
    url: "https://www.novatidecreative.com",
    siteName: "Novatide Creative",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Novatide Creative - AI Receptionist Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novatide Creative - AI Receptionist & Website Design",
    description: "AI-powered call answering and website design to capture more leads.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual code
  },
  referrer: "strict-origin-when-cross-origin",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://cdn.prod.website-files.com" />
        <link rel="dns-prefetch" href="https://cdn.prod.website-files.com" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Novatide Creative",
              url: "https://www.novatidecreative.com",
              logo: "https://www.novatidecreative.com/novatide_256x256.png",
              description: "AI receptionist and website design services for service businesses",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Manhasset",
                addressRegion: "NY",
                postalCode: "11030",
                addressCountry: "US",
              },
              contact: {
                "@type": "ContactPoint",
                telephone: "+1-917-480-6014",
                contactType: "Customer Service",
              },
              sameAs: [
                "https://instagram.com/novatide.creative",
                "https://www.facebook.com/profile.php?id=61585583870547",
              ],
            }),
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "AI Receptionist",
              description: "24/7 automated call answering and appointment booking service",
              applicationCategory: "BusinessApplication",
              offers: {
                "@type": "Offer",
                price: "Contact for pricing",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}