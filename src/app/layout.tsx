// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar'; // ✅ Correct import
// import Footer from '@/components/Footer'; // if applicable

export const metadata = {
  title: 'Mayur Patil - AI Engineer',
  description: 'AI Engineer specializing in GenAI, ML, DL, and CV',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* ✅ Include the Navbar here */}
        {children}
        {/* <Footer /> Optional */}
      </body>
    </html>
  );
}
