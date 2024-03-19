import { Flex, Stack, Title, rem, useMantineTheme } from "@mantine/core";
import ParagraphText from "../shared/ParagraphText";
import { NavLink } from "react-router-dom";
import ArrowRight from "../../assets/arrow.svg?react";
import classes from "./LinksTable.module.css";
import { paths } from "../../utils/paths";
import ButtonPrimary from "../shared/ButtonPrimary";

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
            <ButtonPrimary text="Iscrizione" />
          </NavLink>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default LinksTable;
