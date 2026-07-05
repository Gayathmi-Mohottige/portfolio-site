import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-archivo-black", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", display: "swap" });

export const metadata: Metadata = {
  title: "Gayathmi Mohottige. Freelance Web Developer",
  description: "I build bold, custom websites from scratch. No templates. Sri Lanka and worldwide.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
