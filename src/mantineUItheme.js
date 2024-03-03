import { createTheme, rem } from "@mantine/core";

const fontWeights = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

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
    sizes: {
      h1: {
        fontSize: rem(128),
        fontWeight: fontWeights.extraBold,
        lineHeight: "90%",
      },
    },
  },
});

export default mantineUItheme;

/*
Value	Common weight name

*/
