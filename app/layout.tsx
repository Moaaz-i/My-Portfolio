import type {Metadata} from 'next'
import {Geist, Geist_Mono, Bebas_Neue} from 'next/font/google'
import './globals.css'
import Navbar from './_components/navbar/page'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const bebas_Neue = Bebas_Neue({
  variable: '--font-bebas-neue',
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Moaaz Portfolio',
  description: 'Moaaz Portfolio'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebas_Neue.variable} antialiased bg-[#0A0A0A] text-[#C7C7C7] h-full overflow-hidden`}
        cz-shortcut-listen="true "
      >
        <div className="flex flex-col h-full">
          <Navbar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  )
}
