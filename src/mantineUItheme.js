import { createTheme } from "@mantine/core";

const mantineUItheme = createTheme({
  colors: {
    orangePrimary: ["#ED592B"],
    orangeDark: ["#8F2D0E"],
    orangeLight: ["#FFD7C9"],
    orangeBlack: ["#1D1C1B"],
    bluePrimary: ["#2BBFED"],
    fontPureWhite: ["#FFFFFF"],
    fontDarkerWhite: ["#E9E9E9"],
  },
  primaryShade: { primaryShade: 0 },
  fontFamily: "Inter, sans serif",
  headings: {
    sizes: {},
  },
});

export default mantineUItheme;
