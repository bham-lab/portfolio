/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: { extend: {
    colors: { navy: { DEFAULT: '#0f2557', light: '#1a3a7a' }, brand: { DEFAULT: '#2563eb', dark: '#1d4ed8' }, cloud: { DEFAULT: '#059669' } },
    fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
  } },
}
