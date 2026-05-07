import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003F74',
        secondary: '#F5A623',
      },
      fontFamily: {
        editorial: ['var(--font-editorial)', 'serif'],
        ui: ['var(--font-ui)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
