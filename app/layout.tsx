import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Toaster } from "@/components/ui/sonner"
import { Navbar } from '../components/Navbar';
import Image from 'next/image';
import gradientImg from "@/public/gradient.webp";
import { Footer } from '@/components/footer';

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
      {/* background image to top full width */}
      <body>
        <Image src={gradientImg} alt="background" className="absolute z-[-1] left-0 w-full h-1/2 md:h-3/5 object-cover" role="presentation" priority />
        <div className='flex-auto min-w-0 flex flex-col md:px-0 container max-w-2xl mx-auto min-h-screen px-4 pt-16'>
          <div className='flex-1'>
            <Navbar />
            {children}
          </div>
          <Toaster />
          <Footer className='mb-3 mt-8' />
        </div>
      </body>
    </html>
  )
}
