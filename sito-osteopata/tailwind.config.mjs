/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Verde petrolio — colore principale (brand + sezioni scure)
        petrol: {
          50: '#e9f3f1',
          100: '#cbe2df',
          200: '#9cc7c1',
          300: '#63a49c',
          400: '#2f827a',
          500: '#0f5a54',
          600: '#0c4a45',
          700: '#0a3c38',
          800: '#08302d',
          900: '#062421',
        },
        // Blu / indaco periwinkle — sezioni "energiche"
        indigo: {
          50: '#eef0fb',
          100: '#dfe1f8',
          200: '#c3c7f1',
          300: '#a0a5e9',
          400: '#7d84de',
          500: '#5b63d3',
          600: '#474ec0',
          700: '#3b419e',
          800: '#333980',
          900: '#2d3268',
        },
        // Azzurro acciaio — sezioni intermedie
        sky: {
          400: '#7fa2c4',
          500: '#5f83a8',
          600: '#4d6d8f',
          700: '#3f5a76',
        },
        // Lavanda — colore degli occhielli / etichette sopra i titoli
        lavender: '#aeb2f7',
        // Neutro caldo
        cream: {
          50: '#fbf8f2',
          100: '#f4eee2',
          200: '#e7ddca',
        },
        ink: '#132e2a',
      },
      fontFamily: {
        // Poppins self-hosted (rotondo, amichevole) — importato in Base.astro
        sans: ['Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 18px 40px -20px rgba(10, 60, 56, 0.35)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
