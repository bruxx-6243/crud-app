import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

import { Header } from '@/components/Header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'hashCode',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Toaster position="top-right" richColors />
        <Header />
        <main className="mx-auto mt-10 max-w-sm">{children}</main>
      </body>
    </html>
  )
}
