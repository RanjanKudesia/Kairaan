import './globals.css'
import { GlobalStateProvider } from '@/context/globalState'
import Head from 'next/head';

import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kairaan 2024',
  description: 'Starry Night!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <body className={inter.className}>
        <GlobalStateProvider>
          <Navbar/>
          {children}
          <Footer/>
        </GlobalStateProvider></body>
    </html>
  )
}
