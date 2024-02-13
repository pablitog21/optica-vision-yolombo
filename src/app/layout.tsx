import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Óptica Visión Yolombó',
  description: 'Óptica Visión Yolombó',
  icons: {
    // icon: ['/favicon.ico?v=4'],
    apple: ['/vision-logo.ico?v=4'],
    shortcut: ['/vision-logo.ico']
  },
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <Navbar/>
        
        {children}
        <Footer/>
        </body>
    </html>
  )
}
