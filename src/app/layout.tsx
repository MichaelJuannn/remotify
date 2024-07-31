import type { Metadata } from "next";
import "./globals.css"; // Pastikan untuk mengimpor file CSS global
import { Poppins } from "next/font/google";
import Navbar from "./navbar"; // Import Navbar
import { Toaster } from "@/components/ui/sonner";

// Import font Poppins
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cendekiawan Aswaja",
  description: "Deskripsi Cendekiawan Aswaja",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navbar />
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
