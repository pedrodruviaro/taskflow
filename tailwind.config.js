/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    extend: {
      colors: {
        'brand-yellow-50': '#fefbf3',
        'brand-yellow-100': '#faedc4',
        'brand-yellow-200': '#f6de95',
        'brand-yellow-300': '#f2d066',
        'brand-yellow-400': '#eec137',
        'brand-yellow-500': '#eab308',
        'brand-yellow-600': '#c79807',
        'brand-yellow-700': '#a47d06',
        'brand-yellow-800': '#816204',
        'brand-yellow-900': '#5e4803'
      }
    }
  },
  plugins: []
}
