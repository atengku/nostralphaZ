import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nostra Alpha Z | Dashboard",
  description: "Institutional Operating Model",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}