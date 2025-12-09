import { rem, Stack } from "@mantine/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import BrentaWRLogo from "../assets/logo-brenta-wild-race.svg?react";
import HeroSection from "../components/home/HeroSection";
import LinksTable from "../components/home/LinksTable";
import PageContainer from "../components/shared/PageContainer";
import PageSection from "../components/shared/PageSection";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PageContainer>
        <Stack mb={rem(120)} className={classes.middleSection} mt={rem(-100)}>
          <div style={{ width: "200px" }}>
            <LazyLoadImage
              alt="Mappa 3D"
              effect="opacity"
              placeholderSrc="/logo-val-di-non.png"
              src="/logo-val-di-non.png"
              wrapperProps={{
                style: { transitionDuration: "2s" },
              }}
              width="100%"
            />
          </div>
          <BrentaWRLogo className={classes.logoBig} />
        </Stack>
        <PageSection>
          <LinksTable />
        </PageSection>
      </PageContainer>
    </>
  );
};

export default HomePage;
