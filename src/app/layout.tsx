import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORYZO — Made for Mugs, Built for Tables",
  description:
    "Designed to lift, insulate, and grip in all the right ways. Oryzo makes the simplest moment feel considered.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
