import type { Metadata } from "next";
import "@fontsource/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAster Marketing and Strategy",
  description: "Expert marketing and strategy consulting for high-growth businesses.",
  icons: {
    icon: '/favicon.png',
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ApolloTracker from "@/components/ApolloTracker";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <GoogleAnalytics gaId="G-EME5Q8LQWD" />
        <ApolloTracker />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
