import { createTheme, rem } from "@mantine/core";

export const fontWeights = {
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

export const fontSizesTitles = {
  fontSizeh1_128px: rem(128),
  fontSizeh2_88px: rem(88),
  fontSizeh3_48px: rem(48),
  fontSizeh4_40px: rem(40),
  fontSizeh5_36px: rem(36),
  fontSizeh6_32px: rem(32),
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
        fontSize: fontSizesTitles.fontSizeh1_128px,
        fontWeight: fontWeights.extraBold,
        lineHeight: "90%",
      },
      h2: {
        fontSize: fontSizesTitles.fontSizeh2_88px,
        fontWeight: fontWeights.extraBold,
        lineHeight: "90%",
      },
      h3: {
        fontSize: fontSizesTitles.fontSizeh3_48px,
        fontWeight: fontWeights.semiBold,
        lineHeight: "90%",
      },
      h4: {
        fontSize: fontSizesTitles.fontSizeh4_40px,
        fontWeight: fontWeights.medium,
        lineHeight: "90%",
      },
      h5: {
        fontSize: fontSizesTitles.fontSizeh5_36px,
        fontWeight: fontWeights.semiBold,
        lineHeight: "90%",
      },
      h6: {
        fontSize: fontSizesTitles.fontSizeh6_32px,
        fontWeight: fontWeights.medium,
        lineHeight: "90%",
      },
    },
  },
  other: {
    fontWeights,
  },
});

export const resolver = (theme) => ({
  variables: {
    "--mantine-fw-thin": theme.other.fontWeights.thin,
    "--mantine-fw-extralight": theme.other.fontWeights.extraLight,
    "--mantine-fw-light": theme.other.fontWeights.light,
    "--mantine-fw-normal": theme.other.fontWeights.normal,
    "--mantine-fw-medium": theme.other.fontWeights.medium,
    "--mantine-fw-semibold": theme.other.fontWeights.semiBold,
    "--mantine-fw-bold": theme.other.fontWeights.bold,
    "--mantine-fw-extrabold": theme.other.fontWeights.extraBold,
    "--mantine-fw-black": theme.other.fontWeights.black,
    "--mantine-fst-h1-128px": theme.other.fontSizeh1_128px,
    "--mantine-fst-h2-88px": theme.other.fontSizeh2_88px,
    "--mantine-fst-h3-48px": theme.other.fontSizeh3_48px,
    "--mantine-fst-h4-40px": theme.other.fontSizeh4_40px,
    "--mantine-fst-h5-36px": theme.other.fontSizeh5_36px,
    "--mantine-fst-h6-32px": theme.other.fontSizeh6_32px,
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
