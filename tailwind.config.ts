import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '768px',
        },
      },
      colors: {
        dark: 'var(--clr--dark)',
        primary: 'var(--clr--primary)',
        secondary: 'var(--clr--secondary)',
        green: 'var(--clr--green)',
      },

      keyframes: {
        'open-modal': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-modal': {
          from: { opacity: '0', translate: '0 -10px' },
          to: { opacity: '1', translate: 'none' },
        },
      },

      animation: {
        'open-modal': 'open-modal 0.35s ease-in-out',
        'fade-modal': 'fade-modal 0.7s ease-in-out',
      },
    },
  },
  plugins: [],
}
export default config
