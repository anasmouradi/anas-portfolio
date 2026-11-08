import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anas Mouradi — Full-Stack Software Engineer",
  description:
    "Engineering portfolio of Anas Mouradi, Software Engineer specializing in modern scalable platforms, Java, Spring Boot, React, and cloud architectures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#020618] text-[#90a1b9] antialiased selection:bg-[#00dc82]/20 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
