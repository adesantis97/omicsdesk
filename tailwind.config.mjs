import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Apple system stack: renders as SF Pro on macOS/iOS, Segoe UI on
        // Windows, Roboto on Android. Nothing is downloaded, so the first
        // paint carries no webfont cost and there is no swap flash.
        // NOTE: the rest of the brand (figures, PDFs, carousels) stays on
        // Inter — see assets/brand/tokens.json.
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'Segoe UI',
          'Roboto',
          'system-ui',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },

      // ── Type scale ───────────────────────────────────────────────────
      // One named step per role. Each carries its own line-height and
      // tracking, so a heading can never ship with the wrong leading.
      // Ratios follow the skill (hero 1.05-1.1, title 1.2, body 1.5+,
      // caption 1.4); body is 17px, Apple's reading size.
      //
      // Declared inside `extend`, so the default scale still exists:
      // text-sm / text-lg / text-2xl keep working everywhere.
      fontSize: {
        display: ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],       // 60
        'display-sm': ['3rem', { lineHeight: '1.08', letterSpacing: '-0.022em', fontWeight: '700' }],     // 48
        'title-1': ['2.25rem', { lineHeight: '1.12', letterSpacing: '-0.021em', fontWeight: '700' }],     // 36
        'title-2': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.018em', fontWeight: '600' }],     // 30 · section h2
        'title-3': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.012em', fontWeight: '600' }],      // 20 · panel h3
        'title-4': ['1rem', { lineHeight: '1.35', letterSpacing: '-0.006em', fontWeight: '600' }],        // 16 · card h3
        lead: ['1.25rem', { lineHeight: '1.55', letterSpacing: '-0.004em' }],                             // 20 · hero paragraph
        body: ['1.0625rem', { lineHeight: '1.65' }],                                                      // 17 · reading paragraph
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],                                                   // 14 · card paragraph
        caption: ['0.8125rem', { lineHeight: '1.45', letterSpacing: '0.005em' }],                         // 13 · meta / footnote
        eyebrow: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.14em', fontWeight: '600' }],          // 12 · uppercase label
      },

      // ── Vertical rhythm, 8pt ─────────────────────────────────────────
      // Four values, not twenty. Distance encodes grouping: 96 between
      // independent sections, 64 between related ones, 40 from a heading
      // block to its grid, 24 from a heading to its paragraph.
      spacing: {
        section: '6rem',       // 96
        'section-sm': '4rem',  // 64
        block: '2.5rem',       // 40
        stack: '1.5rem',       // 24
      },

      // ── Corner radii: six ad-hoc values down to four semantic ones ───
      borderRadius: {
        pill: '980px',        // every button — the Apple signature
        tile: '0.625rem',     // 10 · small info tiles inside a card
        card: '0.875rem',     // 14 · every white panel
        panel: '1.25rem',     // 20 · large feature panels
      },

      maxWidth: {
        measure: '68ch',      // ~680px at 17px — the skill's max content width
      },

      transitionTimingFunction: {
        apple: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        250: '250ms',
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
            fontSize: '1.0625rem',
            lineHeight: '1.65',
            maxWidth: '68ch',
            a: {
              color: theme('colors.accent'),
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            },
            'h1,h2,h3,h4': { color: theme('colors.ink'), letterSpacing: '-0.018em' },
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
