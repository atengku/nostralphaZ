import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Instrument_Sans } from 'next/font/google';
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  style: ['normal', 'italic']
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-plex',
});

const instrument = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-instrument',
});

export const metadata: Metadata = {
  title: "Nostra Alpha Z | Platform",
  description: "Institutional Capital Ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plexMono.variable} ${instrument.variable}`}>
      <body className="bg-black text-cream font-body leading-relaxed selection:bg-gold selection:text-black">
        {children}
      </body>
    </html>
  );
}