import type { Metadata } from 'next'
import './globals.css'

import { nyghtFont, nyghtFontItalic, manrope } from './fonts'

export const metadata: Metadata = {
  title: 'Вікторія Пономаренко',
  description: 'Особиста сторінка спеціаліста з астрологічних діагностик Вікторії Пономаренко',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ua">
      <body className={`${nyghtFont.variable} ${nyghtFontItalic.variable} ${manrope.variable} bg-blue`}>
        {children}
      </body>
    </html>
  )
}
