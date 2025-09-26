import "@/styles/globals.css";
import React from "react";
import { type Metadata } from "next";
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff'
};
export const metadata: Metadata = {
  title: {
    default: 'ReLiv Healthy',
    template: '%s | ReLiv Healthy',
  },
  description: 'Holistic healthcare solutions for your well-being',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://relivhealthy.com/',
    siteName: 'ReLiv Healthy',
    title: 'ReLiv Healthy - Holistic Healthcare Solutions',
    description: 'Your trusted partner for comprehensive healthcare and wellness services',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReLiv Healthy',
    description: 'Holistic healthcare solutions for your well-being',
    creator: '@relivhealthy',
  },
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html suppressHydrationWarning lang="en" data-unique-id="ff6aff84-9901-4fb4-baf9-1a45ba49bfb4" data-file-name="app/layout.tsx">
      <body className="bg-white text-foreground antialiased" data-unique-id="f87174f3-120d-4f13-a8f9-869c21066ba5" data-file-name="app/layout.tsx" data-dynamic-text="true">
        {children}
      </body>
    </html>;
}