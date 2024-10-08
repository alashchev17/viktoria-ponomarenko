import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        serif: ['var(--font-nyght)'],
        'serif-italic': ['var(--font-nyght-italic)'],
        sans: ['var(--font-manrope)'],
      },
      colors: {
        blue: '#97B4DE',
        'bright-blue': '#445DDB',
        'dark-blue': '#0C174F',
        bezh: '#F6EDDE',
      },
    },
  },
  plugins: [],
}
export default config
