import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prenájom odvlhčovačov Trenčín | Osobný odber",
  description: "Prenájom výkonných odvlhčovačov v Trenčíne. Ideálne po zatopení, do pivníc, bytov a novostavieb. Osobný odber po dohode.",
  icons: {
    icon: '/images/odvlhcovac1-cfcd4dcc-1c2c-4747-a1ef-865033e6baa4.png',
    shortcut: '/images/odvlhcovac1-cfcd4dcc-1c2c-4747-a1ef-865033e6baa4.png',
    apple: '/images/odvlhcovac1-cfcd4dcc-1c2c-4747-a1ef-865033e6baa4.png',
  },
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
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
