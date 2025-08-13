import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LotusBackground } from "@/components/ui/lotus-background";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhamma Sangha Kolhapur",
  description:
    "A community exploring Buddha's teachings through a scientific, evidence-aware lens",
  keywords: ["Buddhism", "meditation", "mindfulness", "community", "Kolhapur"],
  authors: [{ name: "Dhamma Sangha Kolhapur" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Dhamma Sangha Kolhapur",
    description:
      "A community exploring Buddha's teachings through a scientific, evidence-aware lens",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Dhamma Sangha Kolhapur Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhamma Sangha Kolhapur",
    description:
      "A community exploring Buddha's teachings through a scientific, evidence-aware lens",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
