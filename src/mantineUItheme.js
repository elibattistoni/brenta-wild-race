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
      h2: {
        fontSize: rem(88),
        fontWeight: fontWeights.extraBold,
        lineHeight: "90%",
      },
      h3: {
        fontSize: rem(48),
        fontWeight: fontWeights.semiBold,
        lineHeight: "90%",
      },
      h4: {
        fontSize: rem(40),
        fontWeight: fontWeights.medium,
        lineHeight: "90%",
      },
      h5: {
        fontSize: rem(36),
        fontWeight: fontWeights.semiBold,
        lineHeight: "90%",
      },
      h6: {
        fontSize: rem(32),
        fontWeight: fontWeights.medium,
        lineHeight: "90%",
      },
    },
  },
  other: {
    fontWeights,
  },
});

export default mantineUItheme;

/*
Default theme.fontSizes values:
Key	Value	Value in px
xs	0.75rem	12px
sm	0.875rem	14px
md	1rem	16px
lg	1.125rem	18px
xl	1.25rem	20px

Default theme.lineHeights values:
Key	Value
xs	1.4
sm	1.45
md	1.55
lg	1.6
xl	1.65

Default theme.breakpoints values:
Breakpoint	Viewport width	Value in px
xs	36em	576px
sm	48em	768px
md	62em	992px
lg	75em	1200px
xl	88em	1408px
*/
