import type { Metadata } from 'next';
import './globals.css'; // Pastikan untuk mengimpor file CSS global
import { Poppins } from 'next/font/google';
import Navbar from './navbar'; // Import Navbar


// Import font Poppins
const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Your Application Title',
  description: 'Your application description',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
