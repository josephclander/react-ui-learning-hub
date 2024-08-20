import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/nav/Nav";
import Footer from "./_components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#7b8cde",
};

export const metadata: Metadata = {
  title: {
    template: "%s Component - React UI Learning Hub",
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
  applicationName: "React UI Learning Hub",
  keywords: [
    "React UI components",
    "Learn React components",
    "React tutorial",
    "React component tutorials",
    "Build React UI",
    "React component step-by-step guides",
    "Interactive React examples",
    "React code examples",
    "React UI library",
    "How to build React components",
    "React educational resources",
    "React lists tutorial",
    "React forms tutorial",
    "Essential React UI elements",
    "React UI learning hub",
  ].join(","),
  creator: "Joseph Lander",
  authors: {
    name: "Joseph Lander",
    url: "https://www.linkedin.com/in/josephclander/",
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
