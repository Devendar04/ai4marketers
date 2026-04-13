/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold:      '#B8922A',
        'gold-light': '#D4AA4A',
        dark:      '#0E0C0A',
        'dark-2':  '#1A1714',
        'dark-3':  '#252118',
        paper:     '#F5F0E8',
        muted:     '#6B6457',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dm:       ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
