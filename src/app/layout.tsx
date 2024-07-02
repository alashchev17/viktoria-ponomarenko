import type { Metadata } from 'next'
import './globals.css'

import localFont from '@next/font/local'

export const metadata: Metadata = {
  title: 'Вікторія Пономаренко',
  description: 'Особиста сторінка спеціаліста з астрологічних діагностик Вікторії Пономаренко',
}

const nyghtFont = localFont({
  src: [
    {
      path: '../../public/fonts/NyghtSerif-Light.woff',
      weight: '300'
    },
  ],
  variable: '--font-nyght'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nyghtFont.variable} font-serif`}>{children}</body>
    </html>
  )
}
