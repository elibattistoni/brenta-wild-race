import { NavLink } from "react-router-dom";
import Heading from "../../components/shared/Heading";
import { Container, Stack, Text } from "@mantine/core";
import classes from "./EditionsHomePage.module.css";

const EditionsHomePage = () => {
  return (
    <>
      <Heading title="EDIZIONI PASSATE" subtitle="EDIZIONI" />
      <Container fluid mt="xl">
        <Text size="xl" mb="xl">
          Pagina in costruzione. Stay Tuned!
        </Text>
        <Stack>
          <NavLink to="/edizioni/2017" className={classes.link}>
            Edizione 2017
          </NavLink>
          <NavLink to="/edizioni/2018" className={classes.link}>
            Edizione 2018
          </NavLink>
          <NavLink to="/edizioni/2019" className={classes.link}>
            Edizione 2019
          </NavLink>
        </Stack>
      </Container>
    </>
  );
};

export default EditionsHomePage;
