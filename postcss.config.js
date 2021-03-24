const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  plugins: {
    tailwindcss: {
      purge: [
        "./components/*.jsx",
        "./components/*.tsx",
        "./pages/**/*.jsx",
        "./pages/**/*.tsx",
      ],

      darkMode: false, // or 'media' or 'class'
      theme: {
        fontFamily: {
          sans: ["whyte", ...defaultTheme.fontFamily.sans],
        },
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [],
    },
    autoprefixer: {},
    cssnano: {
      preset: ["default", { discardComments: { removeAll: true } }],
    },
  },
};
