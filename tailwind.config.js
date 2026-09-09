/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        // CSS variable references for dynamic light/dark themes
        bg: 'var(--bg)',
        text: 'var(--text)',
        'text-h': 'var(--text-h)',
        border: 'var(--border)',
        'code-bg': 'var(--code-bg)',
        accent: 'var(--accent)',
        'accent-bg': 'var(--accent-bg)',
        'accent-border': 'var(--accent-border)',
        secondary: 'var(--secondary)',
        'secondary-bg': 'var(--secondary-bg)',
        'secondary-border': 'var(--secondary-border)',
        'accent-gold': 'var(--accent-gold)',

        primary: {
          50: '#e6f4ff',
          100: '#cce8ff',
          200: '#99d1ff',
          300: '#66baff',
          400: '#33a3ff',
          500: '#0080cc',
          600: '#0066a3',
          700: '#004d7a',
          800: '#003352',
          900: '#001a29',
          brand: '#329fdb',
        },
        secondary: {
          50: '#fff2e6',
          100: '#ffe5cc',
          200: '#ffbb99',
          300: '#ff9266',
          400: '#ff6933',
          500: '#d15527',
          600: '#a8441f',
          700: '#7f3318',
          800: '#56220f',
          900: '#2d1108',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#cebd6c',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        dark: {
          100: '#f4f3ec',
          500: '#3a3a3a',
          600: '#2a2a2a',
          700: '#1a1a1a',
          800: '#0a0a0a',
          900: '#010101',
        },

        // Palette dédiée à la landing page (God Favor Solution)
        canvas: '#FAFAF8',
        ink: '#14213D',
        'ink-muted': '#5B6472',
        sky: '#2E86AB',
        flame: '#E2632F',
        line: '#E5E1D6',
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['ui-monospace', 'Consolas', 'monospace'],
        display: ['"Payfair Display"', 'Georgia', 'serif'],

        // Polices dédiées à la landing page, sans toucher au reste du site
        display: ['Newsreader', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};