import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { asset } from "@/lib/utils";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://sazzadali-portfolio.vercel.app";
const isVercel = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "vercel";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Omar | Frontend & UI/UX Engineer",
  description:
    "Portfolio of Omar — Riyadh-based web developer and UI designer crafting fast, animated, accessible experiences with Next.js, React and GSAP.",
  keywords: ["Next.js", "React", "GSAP", "UI/UX", "Frontend Developer", "Web Developer", "Riyadh"],
  authors: [{ name: "Omar", url: SITE_URL }],
  creator: "Omar",
  icons: { icon: { url: asset("/my-letter-favicon.svg"), type: "image/svg+xml" } },
  openGraph: {
    title: "Omar | Frontend & UI/UX Engineer",
    description: "Creating immersive web experiences with React, Next.js and GSAP animation.",
    url: SITE_URL,
    siteName: "Omar Portfolio",
    images: [{ url: "/personal-portfolio.png", alt: "Omar Portfolio Screenshot" }],
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar | Frontend & UI/UX Engineer",
    description: "Modern, responsive, animated websites with React, Next.js, Tailwind and GSAP.",
    images: ["/personal-portfolio.png"],
  },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the head script may set data-theme before React hydrates.
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {isVercel && <Analytics />}
      </body>
    </html>
  );
}
