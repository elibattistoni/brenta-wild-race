import { Container, Title } from "@mantine/core";
import classes from "./Heading.module.css";

const Heading = ({ subtitle, title }) => {
  return (
    <Container fluid mt="xl">
      <header>
        <Title order={5} className={classes.subtitle}>
          {subtitle}
        </Title>
        <Title order={2} className={classes.title}>
          {title}
        </Title>
      </header>
    </Container>
  );
};

export default Heading;
