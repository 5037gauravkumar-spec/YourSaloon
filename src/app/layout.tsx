import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YOUR SALOON | Noida – Book Appointment Online",
  description:
    "Premium salon in Noida. Book haircuts, facials, coloring, bridal services online. Choose your preferred stylist.",
  keywords: ["salon Noida", "haircut Noida", "book salon appointment", "YOUR SALOON"],
  authors: [{ name: "YOUR SALOON" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "YOUR SALOON | Noida – Book Appointment Online",
    description:
      "Premium salon in Noida. Book haircuts, facials, coloring, bridal services online. Choose your preferred stylist.",
    url: "https://yoursaloon.vercel.app",
    siteName: "YOUR SALOON",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YOUR SALOON – Premium Salon in Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YOUR SALOON | Noida – Book Appointment Online",
    description:
      "Premium salon in Noida. Book haircuts, facials, coloring, bridal services online.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
