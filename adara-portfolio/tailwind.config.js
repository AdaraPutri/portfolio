module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: '#ffffff',
        brown: {
          DEFAULT: '#6d5855',
          light: '#dbd5d5',
          pill: '#c0b6b5',
          dot: '#e5e5e5',
        }
      },
      fontFamily: {
        sans: ['GlacialIndifference', 'sans-serif'],
        script: ['PinyonScript', 'cursive'],
      }
    },
  },
  plugins: [],
}