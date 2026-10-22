/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A1F44',
        deep: '#06152F',
        orange: '#FF7A00',
        soft: '#F8F9FB',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 55px rgba(10, 31, 68, 0.10)',
        cardHover: '0 28px 80px rgba(10, 31, 68, 0.16)',
        orangeGlow: '0 16px 42px rgba(255, 122, 0, 0.34)',
        orangeGlowStrong: '0 22px 60px rgba(255, 122, 0, 0.48)',
      },
    },
  },
  plugins: [],
};
