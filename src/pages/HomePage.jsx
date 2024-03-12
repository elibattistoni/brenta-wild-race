import { Flex, rem } from "@mantine/core";
import PageContainer from "../components/shared/PageContainer";
import PageSection from "../components/shared/PageSection";
import classes from "./HomePage.module.css";
import BrentaWRLogo from "../assets/logo-brenta-wild-race.svg?react";
import LinksTable from "../components/home/LinksTable";
import HeroSection from "../components/home/HeroSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PageContainer>
        <Flex mb={rem(120)} className={classes.middleSection}>
          <BrentaWRLogo className={classes.logoBig} />
        </Flex>
        <PageSection>
          <LinksTable />
        </PageSection>
      </PageContainer>
    </>
  );
};

export default HomePage;
