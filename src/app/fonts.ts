import localFont from 'next/font/local';
import { Manrope } from 'next/font/google';

export const nyghtFont = localFont({
  src: [
    {
      path: '../../public/fonts/NyghtSerif-LightItalic.ttf',
      weight: '300',
    },
  ],
  variable: '--font-nyght',
});

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-manrope',
});
