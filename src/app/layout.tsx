import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ashes Blog',
  description: 'Un blog creado por alguien que probablemente, ya no existe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/ash.png" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
