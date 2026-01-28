import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GPULaw - AI驱动的法律援助 | 律师网络",
  description: "GPULaw结合先进的AI法律援助与执业律师。在家庭法、消费者债务、住房、移民等领域获得即时法律指导。提供24/7 AI支持和律师咨询服务。",
  keywords: ["法律AI", "律师咨询", "法律援助", "AI律师", "法律帮助", "家庭法", "移民律师", "消费者债务", "GPULaw"],
  authors: [{ name: "GPULaw Technologies, Inc." }],
  creator: "GPULaw Technologies, Inc.",
  publisher: "GPULaw Technologies, Inc.",
  applicationName: "GPULaw",
  generator: "Next.js",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "GPULaw - AI驱动的法律援助",
    description: "将AI工具与经验丰富的律师相结合的平价法律会员服务",
    url: '/',
    siteName: "GPULaw",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPULaw - AI驱动的法律援助",
    description: "通过AI + 律师服务获得即时法律指导",
    creator: "@gpulaw",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1e40af' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
