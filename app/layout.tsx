import type { Metadata } from "next";
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

// ✅ Mets ici TON URL Vercel exacte :
const SITE_URL = "https://portfolio-marius.vercel.app";

export const metadata: Metadata = {
  title: "Marius — Portfolio",
  description: "Portfolio professionnel — projets, compétences et contact.",
  metadataBase: new URL("https://portfolio-marius.vercel.app"),

  openGraph: {
    title: "Marius — Portfolio",
    description: "Découvrez mon profil, mes compétences et mes projets.",
    url: SITE_URL,
    siteName: "Marius Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 940,
        height: 788,
        alt: "Marius — Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Marius — Portfolio",
    description: "Découvrez mon profil, mes compétences et mes projets.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
