import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });
const DM_Sans_init = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://candyblinks.fun/"),
  title: {
    default: "Candy Blinks | Candy Machine Blink Generator",
    template: "%s | Candy Blinks",
  },
  description:
    "Create and manage your Candy Machine Blinks effortlessly with our intuitive platform. Simplify NFT distribution and minting with ease.",
  openGraph: {
    title: "Candy Blinks - Candy Machine Blink Generator",
    description: "Easily generate Candy Machine BLinks",
    url: "https://candyblinks.fun/",
    siteName: "CandyBlinks",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${DM_Sans_init.className}`}
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
