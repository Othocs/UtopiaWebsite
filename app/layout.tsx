import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

import "./globals.css";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://utopiaessec.fr"),
  title: "Utopia - AI Association of ESSEC Business School",
  description:
    "Utopia is the AI association of ESSEC Business School, dedicated to exploring and sharing knowledge about artificial intelligence and its applications.",
  keywords: [
    "ESSEC",
    "Utopia",
    "AI",
    "artificial intelligence",
    "business school",
    "student association",
  ],
  authors: [{ name: "Utopia ESSEC" }],
  creator: "Utopia ESSEC",
  publisher: "Utopia ESSEC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://utopiaessec.fr",
    title: "Utopia - AI Association of ESSEC Business School",
    description:
      "Utopia is the AI association of ESSEC Business School, dedicated to exploring and sharing knowledge about artificial intelligence and its applications.",
    siteName: "Utopia ESSEC",
    images: [
      {
        url: "https://utopiaessec.fr/utopia.png",
        width: 1200,
        height: 630,
        alt: "Utopia ESSEC - AI Association",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utopia - AI Association of ESSEC Business School",
    description:
      "Utopia is the AI association of ESSEC Business School, dedicated to exploring and sharing knowledge about artificial intelligence and its applications.",
    creator: "@utopiaessec",
    images: ["https://utopiaessec.fr/utopia.png"],
  },
  alternates: {
    canonical: "https://utopiaessec.fr",
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
    // Add verification codes for search console and other services if you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

// Add separate viewport export as recommended by Next.js
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="/utopia.png" />
        {/* Structured Data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Utopia ESSEC",
              url: "https://utopiaessec.fr",
              logo: "https://utopiaessec.fr/utopia.png",
              description:
                "Utopia is the AI association of ESSEC Business School, dedicated to exploring and sharing knowledge about artificial intelligence and its applications.",
              parentOrganization: {
                "@type": "CollegeOrUniversity",
                name: "ESSEC Business School",
                url: "https://www.essec.edu",
              },
              sameAs: [
                // Add your social profiles here
                // "https://twitter.com/utopiaessec",
                // "https://www.linkedin.com/company/utopiaessec",
                // "https://www.instagram.com/utopiaessec/"
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:65px_65px] bg-[#fcf2ff]">
        {" "}
        <Navbar />
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
