import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark "ink" scale (luxury spine)
        ink: {
          900: '#0A0806',
          800: '#120E09',
          700: '#1C1510',
          600: '#261C11',
          500: '#352818',
        },
        // Brand gold (from the official logo)
        gold: {
          300: '#F4DDA0',
          400: '#F0D080',
          500: '#E8C060',
          600: '#C9A045',
          700: '#A8823A',
        },
        // Cork / earth
        cork: {
          400: '#C4956A',
          500: '#8B5E3C',
          600: '#6E4626',
        },
        // Editorial light palette (cream / ivory)
        cream: {
          50: '#FBF8F1',
          100: '#F6F1E7',
          200: '#EFE7D6',
          300: '#E7DFCE',
        },
        // Warm neutrals for text
        sand: {
          100: '#F8F2E8',
          200: '#D4C8B0',
          300: '#9A8870',
          700: '#6B5E4B',
          900: '#1A1611',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1200px',
        wide: '1400px',
        prose2: '60ch',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 24px 60px -20px rgba(0,0,0,0.45)',
        lift: '0 40px 90px -30px rgba(0,0,0,0.6)',
        gold: '0 16px 48px -8px rgba(201,160,69,0.45)',
        ring: '0 0 0 1px rgba(201,160,69,0.18)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'pulse-dot': 'pulseDot 2s infinite',
        'scroll-line': 'scrollLine 2.2s infinite',
        'float-btn': 'floatBtn 3s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
        'spin-rev': 'spin 30s linear infinite reverse',
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.7)' },
        },
        scrollLine: {
          '0%': { opacity: '0', transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { opacity: '1', transform: 'scaleY(1)', transformOrigin: 'top' },
          '100%': { opacity: '0', transform: 'scaleY(1)', transformOrigin: 'bottom' },
        },
        floatBtn: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
