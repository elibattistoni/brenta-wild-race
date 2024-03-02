import { createTheme } from "@mantine/core";

const mantineUItheme = createTheme({
  colors: {
    orangeBrenta: ["#ED592B", "#8F2D0E", "#FFD7C9"],
    orangeBlack: ["#1D1C1B", "#292520", "#372f25"],
    bluePrimary: ["#2BBFED"],
    fontWhite: ["#E9E9E9", "#FFFFFF"],
  },
  primaryShade: { primaryShade: 0 },
  fontFamily: "Inter, sans serif",
  headings: {
    sizes: {},
  },
});

export default mantineUItheme;
