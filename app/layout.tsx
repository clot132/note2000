import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Headerbar from '@/components/header/Headerbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Keeep',
  description: 'Made with love by Web Wizard',
  manifest: '/manifest.json',
  icons: { apple: '/keep.png' },
  themeColor: '#202124',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
              {/* <Headerbar/> */}
        {children}
      </body>
    </html>
  )
}
