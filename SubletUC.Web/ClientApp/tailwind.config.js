/** @type {import('tailwindcss').Config} */
module.exports = {
  //   "./projects/**/*.{html,ts}",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: '#e00122',
          50: '#ffe5e8',
          100: '#ffccd0',
          200: '#ff99a3',
          300: '#ff6677',
          400: '#ff334a',
          500: '#e00122', // Main red color
          600: '#b1001b',
          700: '#800014',
          800: '#4f000d',
          900: '#1f0006',
        },
        gray: {
          DEFAULT: '#333333',
        },
      },
    },
    plugins: [],
  }
}
