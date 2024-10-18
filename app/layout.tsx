import type { Metadata } from "next";
import "./globals.css";

// Define the metadata for the page
export const metadata: Metadata = {
  title: "Ambreen - Lead Automation QA Engineer",
  description:
    "Ambreen is a highly skilled Lead Automation QA Engineer with over 8 years of experience in software testing and quality assurance. Specializing in test automation, secure code testing, and performance optimization, Ambreen has a proven track record of delivering robust testing solutions for a variety of applications, ensuring high-quality and secure software releases.",
};

// RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload Google Fonts and Local Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
