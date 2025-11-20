import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Aman Singh is a backend engineer in Mumbai focused on Go, Python, PHP, and distributed systems that stay fast and reliable.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aman-singh.dev"),
  title: {
    default: `${profile.name} · Software Developer`,
    template: `%s · ${profile.name}`,
  },
  description,
  keywords: [
    "Aman Singh",
    "Software Developer",
    "Go Developer",
    "Distributed Systems",
    "FastAPI",
  ],
  openGraph: {
    title: `${profile.name} · Software Developer`,
    description,
    url: "https://aman-singh.dev",
    type: "website",
    locale: "en_US",
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · Backend Engineer`,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#020617] text-slate-100 antialiased`}
        suppressHydrationWarning
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-[-15rem] mx-auto h-[400px] max-w-4xl blur-[140px]" />
          <div className="noise-overlay" aria-hidden />
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
