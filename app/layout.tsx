import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Sen - Portfolio",
  description: "Modern personal portfolio of Yash Sen, Backend-Focused Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col scroll-smooth bg-[#020814] text-white">
        {children}
      </body>
    </html>
  );
}
