import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-family)'],
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        lg: '65ch',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      canvas: 'hsl(var(--canvas) / <alpha-value>)',
      accent: 'hsl(var(--accent) / <alpha-value>)',
      fg: {
        DEFAULT: 'hsl(var(--fg-default) / <alpha-value>)',
        muted: 'hsl(var(--fg-muted) / <alpha-value>)',
      },
      border: 'hsl(var(--border) / <alpha-value>)',
    },
    extend: {
      screens: {
        xs: '475px',
      },
      keyframes: {
        'slide-up': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-down': {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-out backwards',
        'slide-down': 'slide-down 0.3s ease-out backwards',
      },
    },
  },
  plugins: [],
} satisfies Config
