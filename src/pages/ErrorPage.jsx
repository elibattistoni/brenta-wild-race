import { NavLink } from "react-router-dom";
import { Container, Text, Title } from "@mantine/core";
import classes from "./ErrorPage.module.css";
import { paths } from "../utils/paths";

const ErrorPage = () => {
  return (
    <main className={classes.main}>
      <Container className={classes.container} pt="xl">
        <Text size="lg" pt="xl">
          OOOPS!
        </Text>
        <Title order={1} c="orangeBrenta.0" pt="xs" pb="xs">
          404
        </Title>
        <Text size="sm" pb="xl">
          Qualcosa è andato storto.
        </Text>
        <Text size="lg" pt="xl">
          Qualcosa è andato storto.
        </Text>
        <Text size="lg" pt="xs" pb="xl">
          Mi sa che hai sbagliato sentiero. Ti tocca tornare alla partenza! :)
        </Text>
        <NavLink to={paths.home.link} className={classes.link}>
          Home
        </NavLink>
      </Container>
    </main>
  );
};

export default ErrorPage;
