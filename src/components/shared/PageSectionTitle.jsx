import { Title, rem } from "@mantine/core";

const PageSectionTitle = ({ text }) => {
  return (
    <Title
      order={4}
      mb={rem(0)}
      fz={{
        base: rem(24),
        xs: rem(32),
        sm: rem(40),
      }}
      lh={rem(40)}
    >
      {text}
    </Title>
  );
};

export default PageSectionTitle;
