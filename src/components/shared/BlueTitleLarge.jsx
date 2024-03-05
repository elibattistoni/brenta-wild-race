import { Title, useMantineTheme } from "@mantine/core";

const BlueTitleLarge = ({ text }) => {
  const theme = useMantineTheme();

  return (
    <Title
      order={4}
      fz={{
        base: theme.other.fontSizesTitles.fontSizeh6_32px,
        sm: theme.other.fontSizesTitles.fontSizeh5_36px,
      }}
      fw={theme.other.fontWeights.medium}
      c="bluePrimary.0"
    >
      {text}
    </Title>
  );
};

export default BlueTitleLarge;
