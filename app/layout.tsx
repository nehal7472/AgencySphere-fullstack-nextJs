import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/Footer";
import SubscribeSection from "@/components/layout/subscribe-section";

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
}};

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
