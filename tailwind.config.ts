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
        bg: '#0A0806',
        bg2: '#120E09',
        bg3: '#1C1510',
        bg4: '#261C11',
        gold: '#C9A045',
        gold2: '#F0D080',
        cork: '#8B5E3C',
        cork2: '#C4956A',
        tc: {
          white: '#F8F2E8',
          white2: '#D4C8B0',
          white3: '#9A8870',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float-up': 'floatUp 15s linear infinite',
        'pulse-dot': 'pulseDot 2s infinite',
        'scroll-line': 'scrollLine 2s infinite',
        'float-btn': 'floatBtn 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.2' },
          '100%': { transform: 'translateY(-10vh) rotate(360deg)', opacity: '0' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        scrollLine: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        floatBtn: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(90deg, #C9A045, #F0D080)',
        'cork-gradient': 'linear-gradient(135deg, #C9A045, #C4956A)',
        'hero-radial': 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(139,94,60,0.45) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}

export default config
