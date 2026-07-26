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
        // Marking ink — the committed field. Owns whole regions, never an accent.
        ink: {
          900: '#0C1E52',
          800: '#112A6E',
          700: '#16358A',
          600: '#1B3FAE',
          500: '#2A4FC0',
        },
        // Signal — live state, primary action, stencil marks on the blue field.
        gold: {
          300: '#FBE28A',
          400: '#F7CE3A',
          500: '#F3C31B',
          600: '#EFB700',
          700: '#C79800',
        },
        // Cork granule / bale kraft
        cork: {
          400: '#E0D0B4',
          500: '#C2AC88',
          600: '#9B855F',
        },
        // Kraft grounds (the material the page is printed on)
        cream: {
          50: '#E9DEC8',
          100: '#D9C9AC',
          200: '#CFBC9B',
          300: '#C3AE8B',
        },
        // Text neutrals
        sand: {
          100: '#F4ECDD',
          200: '#DCD0B8',
          300: '#A9B6D8',
          700: '#5C513F',
          900: '#17140F',
        },
        pitch: '#17140F',
        burnt: '#231B12',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
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
