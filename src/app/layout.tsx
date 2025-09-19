import "@/styles/globals.css";
import React from "react";
import { type Metadata } from "next";
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};
export const metadata: Metadata = {
  icons: {
    icon: [{
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png"
    }, {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png"
    }, {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon"
    }],
    apple: [{
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }]
  },
  manifest: "/site.webmanifest"
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