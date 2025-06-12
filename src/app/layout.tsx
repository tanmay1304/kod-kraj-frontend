import type { Metadata } from "next";
import { inter, poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "KOD / KRAJ | A Developer's Journey",
  description: "The portfolio of Tanmay, a full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-background`}>
        {children}
      </body>
    </html>
  );
}