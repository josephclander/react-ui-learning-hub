import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/nav/Nav";
import Footer from "./_components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s component - React UI Learning Hub",
    default: "React UI Learning Hub - Learn HOW to build React components.",
  },
  description:
    "A React component library focused on showing you how to build them.",
  verification: {
    google: "nFdfQzSNvFL_R09YKmsB9iSZYxb5K2w-u-2Zj65wKY0",
  },
  metadataBase: new URL("https://react-ui-learning-hub.vercel.app/"),
  openGraph: {
    images: "./opengraph-image.png",
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
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
