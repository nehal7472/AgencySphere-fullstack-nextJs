import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/Footer";
import SubscribeSection from "@/components/layout/subscribe/subscribe-section";

export const metadata: Metadata = {
  title: {
    default: "AgencySphere | Creative Digital Agency",
    template: "%s | AgencySphere",
  },
  description:
    "AgencySphere is a creative digital agency providing web design, development, branding, and digital marketing services to help businesses grow online.",
  keywords: [
    "digital agency",
    "creative agency",
    "web design",
    "web development",
    "branding",
    "SEO",
    "marketing",
    "AgencySphere",
  ],
  authors: [{ name: "AgencySphere Team" }],
  creator: "AgencySphere",
  publisher: "AgencySphere",
  metadataBase: new URL("https://www.agencysphere.com"),
  openGraph: {
    title: "AgencySphere | Creative Digital Agency",
    description:
      "We build modern websites, stunning brands, and effective marketing strategies. Let’s grow your business together with AgencySphere.",
    url: "https://www.agencysphere.com",
    siteName: "AgencySphere",
    images: [
      {
        url: "https://www.agencysphere.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AgencySphere - Creative Digital Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgencySphere | Creative Digital Agency",
    description:
      "Your partner in web design, development, and digital growth. 🚀",
    images: ["https://www.agencysphere.com/og-image.jpg"],
    creator: "@AgencySphere",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div>{children}</div>
          <SubscribeSection />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
