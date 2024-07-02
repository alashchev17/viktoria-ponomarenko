import localFont from 'next/font/local';
import { Manrope } from 'next/font/google';

export const nyghtFont = localFont({
  src: [
    {
      path: '../../public/fonts/NyghtSerif-Light.woff',
      weight: '300',
    },
  ],
  display: 'swap',
  style: 'italic',
  variable: '--font-nyght',
});

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-manrope',
});
