import { Title, rem, useMantineTheme } from "@mantine/core";

const BlueTitleSmall = ({ text }) => {
  const theme = useMantineTheme();
  return (
    <Title
      order={4}
      fz={{
        base: rem(20),
        xs: rem(24),
      }}
      fw={theme.other.fontWeights.medium}
      c="bluePrimary.0"
    >
      {text}
    </Title>
  );
};

export default BlueTitleSmall;
