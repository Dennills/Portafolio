/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#0f172a',
        'bg-surface': '#1e293b',
        'bg-elevated': '#334155',
        'border': '#2d3548',
        'text-primary': '#e6edf3',
        'text-muted': '#8b949e',
        'text-subtle': '#6e7681',
        'accent': '#60a5fa',  // azul slate
        'green': '#3fb950',
      },
      fontFamily: {
        serif: ['Instrument Serif', 'serif'],
        sans: ['Geist', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}