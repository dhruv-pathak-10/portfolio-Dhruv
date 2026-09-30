import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { getPersonJsonLd, getWebSiteJsonLd } from "@/lib/jsonld";

export const viewport: Viewport = {
  themeColor: "#F6F1EB",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://itsdhruv.online"),
  title: {
    default: "Dhruv Pathak — AI Solutions Engineer | AI Adoption & Solution Architecture",
    template: "%s | Dhruv Pathak",
  },
  description:
    "Portfolio of Dhruv Pathak — AI Solutions Engineer specializing in AI adoption, solution architecture, Voice AI agents, and RevOps workflow automation.",
  authors: [{ name: "Dhruv Pathak", url: "https://itsdhruv.online" }],
  creator: "Dhruv Pathak",
  publisher: "Dhruv Pathak",
  alternates: {
    canonical: "https://itsdhruv.online",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itsdhruv.online",
    title: "Dhruv Pathak — AI Solutions Engineer | AI Adoption & Solution Architecture",
    description: "I don't just build AI. I figure out where it belongs. Discover production architectures, Voice AI agents, and multi-agent systems.",
    siteName: "Dhruv Pathak — Systems Architecture & AI Adoption",
    images: [
      {
        url: "/dhruv-portrait.png",
        width: 764,
        height: 1024,
        alt: "Dhruv Pathak — AI Solutions Engineer & Solution Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Pathak — AI Solutions Engineer | AI Adoption & Solution Architecture",
    description: "I don't just build AI. I figure out where it belongs.",
    images: ["/dhruv-portrait.png"],
    creator: "@dhruvvpathakk",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = getPersonJsonLd();
  const webSiteJsonLd = getWebSiteJsonLd();

  return (
    <html lang="en" className="scroll-smooth bg-[#F6F1EB]">
      <head>
        <JsonLd data={personJsonLd} />
        <JsonLd data={webSiteJsonLd} />
      </head>
      <body className="min-h-screen bg-[#F6F1EB] text-[#1C1917] antialiased selection:bg-[#B12223] selection:text-[#FCF7F1]">
        {children}
      </body>
    </html>
  );
}
