import Heading from "../components/shared/Heading";
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
import { mainNavPaths, paths } from "../utils/paths";

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
      fw="var(--mantine-fw-medium)"
      ml="xl"
    >
      {text}
    </Title>
  );
};

const LinksTable = () => {
  return (
    <Stack gap={0}>
      <Flex className={classes.tableRow}>
        <RowTitle text="PERCORSO e VARIANTI" />
        <Flex gap="xl" mr="xl" align="center">
          <ParagraphText>Vuoi scaricare le tracce GPX?</ParagraphText>
          <NavLink to={paths.gara.children.percorsoVarianti.link}>
            <ArrowRight style={{ cursor: "pointer" }} />
          </NavLink>
        </Flex>
      </Flex>
      <Flex className={classes.tableRow}>
        <RowTitle text="PROGRAMMA" />
        <Flex gap="xl" mr="xl" align="center">
          <ParagraphText>Come è strutturata la gara?</ParagraphText>
          <NavLink to={paths.gara.children.programma.link}>
            <ArrowRight style={{ cursor: "pointer" }} />
          </NavLink>
        </Flex>
      </Flex>
      <Flex className={classes.tableRow}>
        <RowTitle text="REGOLAMENTO" />
        <Flex gap="xl" mr="xl" align="center">
          <ParagraphText>Quali regole seguire?</ParagraphText>
          <NavLink to={paths.gara.children.regolamento.link}>
            <ArrowRight style={{ cursor: "pointer" }} />
          </NavLink>
        </Flex>
      </Flex>
      <Flex className={classes.tableRow}>
        <RowTitle text="MONTEPREMI" />
        <Flex gap="xl" mr="xl" align="center">
          <ParagraphText>Cosa c'è in palio?</ParagraphText>
          <NavLink to={paths.gara.children.montepremi.link}>
            <ArrowRight style={{ cursor: "pointer" }} />
          </NavLink>
        </Flex>
      </Flex>
      <Flex className={classes.tableRow}>
        <RowTitle text="ISCRIZIONE" />
        <Flex gap="xl" mr="xl" align="center">
          <NavLink to={paths.gara.children.iscrizione.link}>
            <ButtonPrimary text="Iscriviti" />
          </NavLink>
        </Flex>
      </Flex>
    </Stack>
  );
};

const HomePage = () => {
  return (
    <>
      <Heading title="HOME" subtitle="HOME" />
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
