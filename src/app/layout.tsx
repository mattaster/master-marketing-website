import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAster Marketing and Strategy",
  description: "Expert marketing and strategy consulting for high-growth businesses.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
