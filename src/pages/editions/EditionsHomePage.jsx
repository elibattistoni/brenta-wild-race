import { Stack } from "@mantine/core";
import { NavLink } from "react-router-dom";
import Heading from "../../components/shared/Heading";
import PageContainer from "../../components/shared/PageContainer";
import classes from "./EditionsHomePage.module.css";

const EditionsHomePage = () => {
  return (
    <>
      <Heading title="EDIZIONI PASSATE" subtitle="EDIZIONI" />
      <PageContainer>
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
          <NavLink to="/edizioni/2024" className={classes.link}>
            Edizione 2024
          </NavLink>
          <NavLink to="/edizioni/2025" className={classes.link}>
            Edizione 2025
          </NavLink>
          <NavLink to="/edizioni/2026" className={classes.link}>
            Edizione 2026
          </NavLink>
        </Stack>
      </PageContainer>
    </>
  );
};

export default EditionsHomePage;
