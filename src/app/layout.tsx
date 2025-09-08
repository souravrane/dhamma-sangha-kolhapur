import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LotusBackground } from "@/components/ui/lotus-background";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "धम्म संघ कोल्हापूर",
  description:
    "वैज्ञानिक, साक्ष्य-आधारित दृष्टिकोनातून बुद्धाच्या शिकवणींचा अभ्यास करणारा समुदाय",
  keywords: ["बौद्ध धर्म", "ध्यान", "सजगता", "समुदाय", "कोल्हापूर"],
  authors: [{ name: "धम्म संघ कोल्हापूर" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "धम्म संघ कोल्हापूर",
    description:
      "वैज्ञानिक, साक्ष्य-आधारित दृष्टिकोनातून बुद्धाच्या शिकवणींचा अभ्यास करणारा समुदाय",
    type: "website",
    locale: "mr_IN",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "धम्म संघ कोल्हापूर लोगो",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "धम्म संघ कोल्हापूर",
    description:
      "वैज्ञानिक, साक्ष्य-आधारित दृष्टिकोनातून बुद्धाच्या शिकवणींचा अभ्यास करणारा समुदाय",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr">
      <body className={inter.className}>
        <LotusBackground>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LotusBackground>
      </body>
    </html>
  );
}
