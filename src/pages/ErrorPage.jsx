import { NavLink, useRouteError } from "react-router-dom";
import Footer from "../components/layout/Footer";
import MainNavigation from "../components/layout/MainNavigation";
import { Container, Text, Title } from "@mantine/core";
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <Container className={classes.container} pt="xl">
          <Text size="lg" pt="xl">
            OOOPS!
          </Text>
          <Title order={1} c="orangeBrenta.0" pt="xs" pb="xs">
            {error.status}
          </Title>
          <Text size="sm" pb="xl">
            {error.statusText}
          </Text>
          <Text size="lg" pt="xl">
            Qualcosa è andato storto.
          </Text>
          <Text size="lg" pt="xs" pb="xl">
            Mi sa che hai sbagliato sentiero. Ti tocca tornare alla partenza!
          </Text>
          <NavLink to="/" className={classes.link}>
            Home
          </NavLink>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
