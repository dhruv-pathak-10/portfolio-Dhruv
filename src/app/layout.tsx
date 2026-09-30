import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F6F1EB",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://itsdhruv.online"),
  title: {
    default: "DHRUV PATHAK — AI Solutions Engineer & Solution Architecture",
    template: "%s | DHRUV PATHAK",
  },
  description:
    "AI Solutions Engineer focused on AI adoption, solution architecture, automation, and turning business problems into practical AI systems.",
  authors: [{ name: "Dhruv Pathak", url: "https://itsdhruv.online" }],
  creator: "Dhruv Pathak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itsdhruv.online",
    title: "DHRUV PATHAK — AI Solutions Engineer",
    description: "I don't just build AI. I figure out where it belongs.",
    siteName: "Dhruv Pathak Editorial Portfolio",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-[#F6F1EB]">
      <body className="min-h-screen bg-[#F6F1EB] text-[#1C1917] antialiased selection:bg-[#B12223] selection:text-[#FCF7F1]">
        {children}
      </body>
    </html>
  );
}
