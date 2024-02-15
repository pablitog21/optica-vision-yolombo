'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'
import { useEffect } from 'react';
import Modal from '@/components/sub/Modal '
import BotonWhatsapp from '@/components/sub/BotonWhatsapp '

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Óptica Visión Yolombó',
  description: 'Óptica Visión Yolombó',
  icons: {
    // icon: ['/favicon.ico?v=4'],
    apple: ['/vision-logo.ico?v=4'],
    shortcut: ['/vision-logo.ico']
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Lleva la página al principio cuando se monta
    window.scrollTo(0, 0);

    // También lleva la página al principio cuando se recarga
    const handleWindowReload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleWindowReload);

    return () => {
      window.removeEventListener('beforeunload', handleWindowReload);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className}bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <Modal/>
        <Navbar />
        {children}
        <BotonWhatsapp />
        <Footer />
      </body>
    </html>
  )
}

