import type { Metadata } from "next";
import { Inter, Gloock } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primestudio.pt"),
  title: {
    default: "Prime Studio | Agência Web em Portugal — Websites que Geram Clientes",
    template: "%s | Prime Studio",
  },
  description:
    "Prime Studio é uma agência web em Portugal especializada em criação de websites profissionais, landing pages de alta conversão e SEO técnico. Transformamos visitas em clientes.",
  keywords: [
    "criação de sites em Portugal",
    "agência web Portugal",
    "desenvolvimento de websites profissionais",
    "landing pages que convertem",
    "SEO Portugal",
    "criação de website empresa",
    "agência digital Portugal",
  ],
  authors: [{ name: "Prime Studio" }],
  creator: "Prime Studio",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://primestudio.pt",
    siteName: "Prime Studio",
    title: "Prime Studio | Websites Profissionais que Transformam Visitas em Clientes",
    description:
      "Criamos websites profissionais, landing pages e estratégias de SEO que fazem o seu negócio crescer online.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prime Studio — Agência Web em Portugal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prime Studio | Agência Web em Portugal",
    description: "Websites profissionais que transformam visitas em clientes.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://primestudio.pt",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${inter.variable} ${gloock.variable}`}>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
