import { NavLink } from "react-router-dom";
import Heading from "../../components/shared/Heading";
import { Stack, Text } from "@mantine/core";
import classes from "./EditionsHomePage.module.css";
import PageContainer from "../../components/shared/PageContainer";

const EditionsHomePage = () => {
  return (
    <>
      <Heading title="EDIZIONI PASSATE" subtitle="EDIZIONI" />
      <PageContainer>
        <Text size="xl" mb="xl">
          Pagina in costruzione. Stay Tuned!
        </Text>
        <Stack>
          <NavLink
            to="/brenta-wild-race/edizioni/2017"
            className={classes.link}
          >
            Edizione 2017
          </NavLink>
          <NavLink
            to="/brenta-wild-race/edizioni/2018"
            className={classes.link}
          >
            Edizione 2018
          </NavLink>
          <NavLink
            to="/brenta-wild-race/edizioni/2019"
            className={classes.link}
          >
            Edizione 2019
          </NavLink>
        </Stack>
      </PageContainer>
    </>
  );
};

export default EditionsHomePage;
