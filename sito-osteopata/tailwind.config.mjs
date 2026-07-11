/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette "sanitaria" calma. Cambia questi valori per ripersonalizzare tutto il sito.
        brand: {
          50: '#f0f7f6',
          100: '#dbecea',
          200: '#bcd9d5',
          300: '#8fbeb8',
          400: '#5f9d96',
          500: '#437f78', // colore principale (verde salvia/petrolio)
          600: '#356561',
          700: '#2c524f',
          800: '#264442',
          900: '#223a38',
        },
        sand: {
          50: '#faf8f4',
          100: '#f3eee5',
          200: '#e7ddcc',
        },
        ink: '#1f2a29',
      },
      fontFamily: {
        // Font di sistema: veloce, zero richieste esterne, nessun problema GDPR (a differenza
        // del Google Fonts via CDN). Vedi README per come passare a un font self-hosted.
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
