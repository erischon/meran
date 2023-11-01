import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Meran",
  description: "A web application for Freelancers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
