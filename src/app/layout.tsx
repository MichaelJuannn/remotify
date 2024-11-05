import type { Metadata } from "next";
import "./globals.css"; // Pastikan untuk mengimpor file CSS global
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

// Import font Poppins
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Remotify",
  description: "Remotify your jobs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
