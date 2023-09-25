import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ContactSection } from "./components/Contact/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LegacyTech",
  description: "LegacyTech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <ContactSection />
        <Footer />
      </body>
    </html>
  );
}
