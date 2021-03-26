const colors = require("tailwindcss/colors");

module.exports = {
  // @see https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/components/**/*.js", "./pages/**/*.js"],
  theme: {
    colors: {
      teal: colors.teal,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      white: colors.white,
    },
    extend: {
      minHeight: {
        "almost-screen": "calc(-18rem + 100vh)",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
