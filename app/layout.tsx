import type { Metadata } from "next";
import { Space_Mono, Inter, Fraunces, Instrument_Serif } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const fraunces = Fraunces({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Andrew Vitt",
  description: "UC Berkeley '26, Data Science and Legal Studies. PM-track.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${inter.variable} ${fraunces.variable} ${instrumentSerif.variable}`}
      style={{ backgroundColor: '#f7f3ec' }}
    >
      <body style={{ backgroundColor: '#f7f3ec' }}>{children}</body>
    </html>
  );
}
