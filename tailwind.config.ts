import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2a2a2a',
          light: '#3a3a3a',
        },
        secondary: {
          DEFAULT: '#f5f5f5',
          dark: '#d4d4d4',
        },
        accent: '#666666',
        dark: '#1a1a1a',
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BA5A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair-display)'],
      },
    },
  },
  plugins: [],
}

export default config 