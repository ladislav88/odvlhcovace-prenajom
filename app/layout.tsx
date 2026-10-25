import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SITE_URL, LOCAL_BUSINESS_JSON_LD } from "./lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Prenájom odvlhčovačov Trenčín | Požičovňa vysúšačov",
  description: "Prenájom odvlhčovačov a vysúšačov v Trenčíne a okolí. Na stavbu, do bytu, pivnice aj po zatopení. 8 € / deň, min. 10 dní. Volajte +421 911 911 876.",
  keywords: ["prenájom odvlhčovačov", "požičovňa vysúšačov", "Trenčín", "odvlhčovanie po zatopení", "vysúšanie stavieb", "priemyselný odvlhčovač", "odvlhčovač Trenčín"],
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: SITE_URL,
    siteName: "Prenájom odvlhčovačov Trenčín",
    title: "Prenájom odvlhčovačov Trenčín | Požičovňa vysúšačov",
    description: "Prenájom odvlhčovačov a vysúšačov v Trenčíne a okolí. Na stavbu, do bytu, pivnice aj po zatopení. 8 € / deň, min. 10 dní. Volajte +421 911 911 876.",
    images: [{ url: "/images/odvlhcovac-prenajom-trencin-hero.webp", width: 1200, height: 630, alt: "Priemyselný odvlhčovač na prenájom v Trenčíne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prenájom odvlhčovačov Trenčín | Požičovňa vysúšačov",
    description: "Prenájom odvlhčovačov a vysúšačov v Trenčíne a okolí. Na stavbu, do bytu, pivnice aj po zatopení. 8 € / deň, min. 10 dní. Volajte +421 911 911 876.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  category: "services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }} />
        <Navbar />
        <main className="min-h-screen bg-transparent">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
