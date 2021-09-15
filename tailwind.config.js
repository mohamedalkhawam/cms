module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "theme-main": "#333333",
        "theme-dark": "#282828",
        "theme-hover": "#202020",
        "theme-light": "#F8F8F8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
