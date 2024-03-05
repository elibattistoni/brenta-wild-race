import { Title, rem } from "@mantine/core";

const PageSectionTitle = ({ text }) => {
  return (
    <Title
      order={4}
      mb="lg"
      fz={{
        base: rem(24),
        xs: rem(32),
        sm: rem(40),
      }}
      lh={rem(32)}
    >
      {text}
    </Title>
  );
};

export default PageSectionTitle;
