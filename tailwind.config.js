module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      Spartan: ["spartan, sans"],
    },
    container: {
      center: true,
      padding: '1rem',
      screen: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
