import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";

export const metadata: Metadata = {
  title: "Utopia",
  description:
    "Utopia official website. Utopia is the new AI association of ESSEC Business School",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
