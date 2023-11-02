import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

export const metadata: Metadata = {
  title: "Meran",
  description: "A web application for Freelancers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider appearance={{ elements: { footer: "hidden" } }}>
        <body className="">{children}</body>
      </ClerkProvider>
    </html>
  );
}
