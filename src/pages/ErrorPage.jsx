import { NavLink, useRouteError } from "react-router-dom";
import Footer from "../components/layout/Footer";
import MainNavigation from "../components/layout/MainNavigation";
import { Container, Text, Title } from "@mantine/core";
import classes from "./ErrorPage.module.css";
import { paths } from "../utils/paths";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <MainNavigation />
      <main className={classes.main}>
        <Container className={classes.container} pt="xl">
          <Text size="lg" pt="xl">
            {error.status ? "OOOPS!" : "ATTENZIONE"}
          </Text>
          <Title order={1} c="orangeBrenta.0" pt="xs" pb="xs">
            {error.status ?? "OOOPS!"}
          </Title>
          <Text size="sm" pb="xl">
            {error.statusText ?? "Something went wrong."}
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
      <Footer />
    </>
  );
};

export default ErrorPage;
