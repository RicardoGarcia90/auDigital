/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      colors: {
        primary: '#00BF63',
        bgTheme: '#F5F5F5',
        bgCard: '#CCCCCC',
        textColor: '#333333',
        blue: '#004AAD',
        blueLight: '#4896FD',
        greenLight: '#65D89F',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
        },
      },
    },
  },
  plugins: [],
};
