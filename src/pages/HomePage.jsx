import {
  Flex,
  Space,
  Stack,
  Text,
  Title,
  rem,
  useMantineTheme,
} from "@mantine/core";
import PageContainer from "../components/shared/PageContainer";
import PageSection from "../components/shared/PageSection";
import ButtonPrimary from "../components/shared/ButtonPrimary";
import ParagraphText from "../components/shared/ParagraphText";
import ArrowRight from "../assets/arrow.svg?react";
import classes from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import { paths } from "../utils/paths";
import { Container } from "@mantine/core";
import BlueTitleMedium from "../components/shared/BlueTitleMedium";
import ButtonSecondary from "../components/shared/ButtonSecondary";

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
  return (
    <Container fluid className={classes.hero}>
      <Stack gap={rem(0)} className={classes.title}>
        <Text size={rem(20)} fw="var(--mantine-fw-medium)" ml={rem(6)}>
          Nuova Edizione
        </Text>
        <Title order={1} c="orangeBrenta.0" pt={rem(0)} pb={rem(0)}>
          BRENTA WILD RACE
        </Title>
      </Stack>
      <Stack gap={rem(24)} className={classes.where} mt={rem(48)} ml={rem(6)}>
        <Text size={rem(24)} fw="var(--mantine-fw-medium)">
          Campodenno
        </Text>
        <BlueTitleMedium text="07 Luglio 2024" />
      </Stack>
      <Flex
        justify="flex-start"
        align="start"
        gap={rem(48)}
        className={classes.cta}
        ml={rem(6)}
        mt={rem(12)}
      >
        <ButtonSecondary text="La Gara" />
        <ButtonPrimary text="Iscriviti" />
      </Flex>
      <div className={classes.image}></div>
      <Flex
        className={classes.trailSpecs}
        justify="end"
        align="end"
        mb={rem(48)}
      >
        <Text size={rem(20)} fw="var(--mantine-fw-medium)">
          23km 2100D+ / 12km 1000D+
        </Text>
      </Flex>
    </Container>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PageContainer>
        <Text size="xl">Pagina in costruzione. Stay Tuned!</Text>
        <Space h={rem(240)} />
        <PageSection>
          <LinksTable />
        </PageSection>
      </PageContainer>
    </>
  );
};

export default HomePage;
