import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#0f172a',
        accent: '#0d9488',
        'accent-dark': '#0f766e',
        // Warm off-white page surfaces (never pure white)
        paper: '#f8f8f5',
        'paper-2': '#f1f3f1',
        // Teal-tinted band + deep feature band
        'tint': '#eaf3f0',
        'tint-2': '#dcece7',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -12px rgba(15,23,42,0.10)',
        'card-hover': '0 2px 4px rgba(15,23,42,0.06), 0 18px 40px -16px rgba(13,148,136,0.28)',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            a: {
              color: theme('colors.accent'),
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            },
            'h1,h2,h3,h4': { color: theme('colors.ink') },
            code: {
              color: theme('colors.ink'),
              backgroundColor: theme('colors.slate.100'),
              padding: '0.15em 0.35em',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
