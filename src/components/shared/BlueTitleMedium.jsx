import { Title, rem, useMantineTheme } from "@mantine/core";

const BlueTitleMedium = ({ text }) => {
  const theme = useMantineTheme();
  return (
    <Title
      order={4}
      fz={{
        base: rem(24),
        xs: rem(28),
        sm: theme.other.fontSizesTitles.fontSizeh6_32px,
      }}
      fw={theme.other.fontWeights.medium}
      c="bluePrimary.0"
    >
      {text}
    </Title>
  );
};

export default BlueTitleMedium;
