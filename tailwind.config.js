/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blueprint-bg': '#ffffff',
        'blueprint-line': '#000000',
        'blueprint-accent': '#00ffff',
        'blueprint-text': '#333333',
        'dark-bg': '#0a0a0f',
        'dark-surface': '#13131a',
        'dark-line': '#00ffff',
        'dark-text': '#e5e5e5',
      },
      fontFamily: {
        'mono': ['Space Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
