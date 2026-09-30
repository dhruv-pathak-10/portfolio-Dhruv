import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#080A0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://itsdhruv.online"),
  title: {
    default: "Dhruv Pathak — AI Solutions Engineer | AI Adoption & Solution Architecture",
    template: "%s | Dhruv Pathak — AI Solutions Engineer",
  },
  description:
    "AI Solutions Engineer focused on AI adoption, solution architecture, automation, AI agents and business workflow transformation. Turning messy operational problems into practical, deployable systems.",
  keywords: [
    "Dhruv Pathak",
    "AI Solutions Engineer",
    "AI Adoption Specialist",
    "AI Consultant",
    "Solution Architecture",
    "Voice AI",
    "AI Agents",
    "RevOps Automation",
    "LangChain",
    "ElevenLabs",
    "HubSpot",
  ],
  authors: [{ name: "Dhruv Pathak", url: "https://itsdhruv.online" }],
  creator: "Dhruv Pathak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itsdhruv.online",
    title: "Dhruv Pathak — AI Solutions Engineer | AI Adoption & Solution Architecture",
    description:
      "I don't just build AI. I figure out where it belongs. AI Solutions Engineer bridging business problems and technical execution.",
    siteName: "Dhruv Pathak Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Pathak — AI Solutions Engineer",
    description: "I don't just build AI. I figure out where it belongs.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#080A0F] text-[#F5F7FA] font-sans antialiased selection:bg-[#4F7CFF]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
