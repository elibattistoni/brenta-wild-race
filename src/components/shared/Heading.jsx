import { Container, Title, rem } from "@mantine/core";

const Heading = ({ subtitle, title }) => {
  return (
    <Container fluid mt="xl">
      <header>
        <Title order={5} pl={rem(2)}>
          {subtitle}
        </Title>
        <Title order={2} c="orangeBrenta.0">
          {title}
        </Title>
      </header>
    </Container>
  );
};

export default Heading;
