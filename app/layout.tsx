import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from 'next-themes'
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  metadataBase: new URL('https://hellofaizan.tech'),
  title: {
    default: 'HelloFaizan',
    template: '%s | HelloFaizan',
  },
  description: 'I build Internet products.',
  openGraph: {
    title: 'HelloFaizan',
    description: 'I build Internet products.',
    url: 'https://hellofaizan.tech',
    siteName: 'HelloFaizan',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'HelloFaizan',
    card: 'summary_large_image',
  },
  // verification: {
  //   google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
  //   yandex: '14d2e73487fa6c71',
  // },
};

const cx = (...classes: any) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cx(
      'text-white bg-[#111010]',
      GeistSans.variable,
      GeistMono.variable
    )}>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
          <Navbar />
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  )
}
