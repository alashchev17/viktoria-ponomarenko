import localFont from 'next/font/local'
import { Manrope } from 'next/font/google'

export const nyghtFont = localFont({
  src: [
    {
      path: '../../public/fonts/NyghtSerif-Light.woff2',
      weight: '300',
    },
  ],
  variable: '--font-nyght',
})

export const nyghtFontItalic = localFont({
  src: [
    {
      path: '../../public/fonts/NyghtSerif-LightItalic.woff2',
      weight: '300',
    },
  ],
  variable: '--font-nyght-italic',
})

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-manrope',
})
