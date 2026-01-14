import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Novatide Creative - AI Receptionist & Website Design Services",
  description: "AI-powered call answering, lead qualification, and stunning websites that convert. Everything you need to capture more leads and scale your business.",
  keywords: ["AI receptionist", "website design", "lead qualification", "business automation", "call answering service"],
  authors: [{ name: "Novatide Creative" }],
  openGraph: {
    title: "Novatide Creative - AI Receptionist & Website Design Services",
    description: "AI-powered call answering, lead qualification, and stunning websites that convert.",
    type: "website",
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
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
