import { Flex, Stack, Text, Title, rem, useMantineTheme } from "@mantine/core";
import PageContainer from "../components/shared/PageContainer";
import PageSection from "../components/shared/PageSection";
import ButtonPrimary from "../components/shared/ButtonPrimary";
import ParagraphText from "../components/shared/ParagraphText";
import ArrowRight from "../assets/arrow.svg?react";
import classes from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import { paths } from "../utils/paths";
import ButtonSecondary from "../components/shared/ButtonSecondary";
import BrentaWRLogo from "../assets/logo-brenta-wild-race.svg?react";
import urlHeroImgSmall from "../assets/hero-image-xl-small.png";
import urlHeroImgBig from "../assets/hero-image-xl.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

const RowTitle = ({ text }) => {
  const theme = useMantineTheme();
  return (
    <Title
      order={4}
      fz={{
        base: rem(24),
        xs: rem(28),
        sm: theme.other.fontSizesTitles.fontSizeh6_32px,
      }}
      className={classes.rowTitle}
    >
      {text}
    </Title>
  );
};

const RowContent = ({ text, link }) => {
  return (
    <Flex className={classes.rowContent}>
      <ParagraphText>{text}</ParagraphText>
      <NavLink to={link}>
        <ArrowRight className={classes.arrow} />
      </NavLink>
    </Flex>
  );
};

const LinksTable = () => {
  return (
    <Stack gap={0}>
      <Flex className={classes.tableRow}>
        <RowTitle text="PERCORSO e VARIANTI" />
        <RowContent
          text="Vuoi scaricare le tracce GPX?"
          link={paths.gara.children.percorsoVarianti.link}
        />
      </Flex>
      <Flex className={classes.tableRow}>
        <RowTitle text="PROGRAMMA" />
        <RowContent
          text="Come è strutturata la gara?"
          link={paths.gara.children.programma.link}
        />
      </Flex>
      <Flex className={classes.tableRow}>
        <RowTitle text="REGOLAMENTO" />
        <RowContent
          text="Quali regole seguire?"
          link={paths.gara.children.regolamento.link}
        />
      </Flex>
      <Flex className={classes.tableRow}>
        <RowTitle text="MONTEPREMI" />
        <RowContent
          text="Cosa c'è in palio?"
          link={paths.gara.children.montepremi.link}
        />
      </Flex>
      <Flex className={classes.tableRow}>
        <RowTitle text="ISCRIZIONE" />
        <Flex className={classes.rowContent}>
          <NavLink to={paths.gara.children.iscrizione.link}>
            <ButtonPrimary text="Iscriviti" />
          </NavLink>
        </Flex>
      </Flex>
    </Stack>
  );
};

const HeroSection = () => {
  // const [opacity, setOpacity] = useState(0);

  // useEffect(() => {
  //   const imgRef = document.querySelector("#imgBig");

  //   const handleLoaded = () => {
  //     if (imgRef.complete) {
  //       setOpacity(1);
  //     }
  //   };

  //   imgRef.addEventListener("load", handleLoaded);
  //   return () => imgRef.removeEventListener("load", handleLoaded);
  // }, []);

  console.log(urlHeroImgSmall);

  return (
    <div className={classes.hero}>
      <div className={classes.imgContainer}>
        <div className={classes.imgContainerInner}>
          {/* <img
            src={urlHeroImgSmall}
            alt="Hero Image"
            loading="eager"
            className={classes.imgLoading}
            style={{ opacity: 1 - opacity }}
          />
          <img
            id="imgBig"
            src={urlHeroImgBig}
            alt="Hero Image"
            loading="lazy"
            className={classes.imgLoaded}
            style={{ opacity: opacity }}
          /> */}
          <LazyLoadImage
            alt="Hero Image of Runner"
            effect="opacity"
            // placeholderSrc={urlHeroImgSmall}
            // src={urlHeroImgBig}
            placeholderSrc="/brenta-wild-race/src/assets/hero-image-xl.png"
            src="/brenta-wild-race/src/assets/hero-image-xl.png"
            className={classes.imgLoaded}
            wrapperProps={{
              style: { transitionDuration: "2s" },
            }}
          />
        </div>
      </div>
      <div className={classes.titleContainer}>
        <Text
          fz={{ base: "md", sm: "lg", md: "xl" }}
          fw="var(--mantine-fw-medium)"
          ml={rem(6)}
        >
          Nuova Edizione
        </Text>
        <Title
          order={1}
          c="orangeBrenta.0"
          pt={rem(0)}
          pb={rem(0)}
          className={classes.heroTitle}
        >
          BRENTA WILD RACE
        </Title>
      </div>
      <div className={classes.where}>
        <div className={classes.whereInner}>
          <Text
            fz={{ base: "xl", md: rem(24) }}
            size={rem(24)}
            fw="var(--mantine-fw-medium)"
          >
            Campodenno
          </Text>
          <Text
            fz={{ base: rem(24), sm: rem(28), md: rem(32) }}
            size={rem(24)}
            fw="var(--mantine-fw-medium)"
            c="bluePrimary.0"
          >
            07 Luglio 2024
          </Text>
        </div>
      </div>
      <div className={classes.cta}>
        <NavLink to={paths.gara.children.percorsoVarianti.link}>
          <ButtonSecondary text="La Gara" />
        </NavLink>
        <NavLink to={paths.gara.children.iscrizione.link}>
          <ButtonPrimary text="Iscriviti" />
        </NavLink>
      </div>
      <div className={classes.trailSpecs}>
        <div className={classes.trailSpecsWrapper}>
          <Text
            fz={{ base: "sm", sm: "md", md: "lg" }}
            fw="var(--mantine-fw-medium)"
          >
            23km 2000m D+ /
          </Text>
          <Text
            fz={{ base: "sm", sm: "md", md: "lg" }}
            fw="var(--mantine-fw-medium)"
          >
            14km 1200m D+
          </Text>
        </div>
      </div>
    </div>
  );
};

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
