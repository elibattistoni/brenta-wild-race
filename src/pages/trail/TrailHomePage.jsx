import {
  Container,
  Flex,
  Space,
  Stack,
  Title,
  rem,
  useMantineTheme,
} from "@mantine/core";
import Heading from "../../components/shared/Heading";
import PageContainer from "../../components/shared/PageContainer";
import PageSection from "../../components/shared/PageSection";
import PageSectionTitle from "../../components/shared/PageSectionTitle";
import BlueTitleMedium from "../../components/shared/BlueTitleMedium";
import ParagraphText from "../../components/shared/ParagraphText";
import classes from "./TrailHomePage.module.css";
import Trail from "../../assets/trail-1.svg?react";
import ArrowRight from "../../assets/arrow.svg?react";
import ButtonSecondary from "../../components/shared/ButtonSecondary";
import ButtonPrimary from "../../components/shared/ButtonPrimary";

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

const TrailHomePage = () => {
  return (
    <>
      <Heading title="PANORAMICA" subtitle="LA GARA" />
      <PageContainer>
        <PageSection>
          <PageSectionTitle text="PERCORSO e VARIANTI" />
          <Container fluid className={classes.sectionContent}>
            <Stack align="center">
              <BlueTitleMedium text="PARTENZA / ARRIVO" />
              <ParagraphText>Eremo di San Pancrazio</ParagraphText>
            </Stack>
            <Container fluid className={classes.flex}>
              <Stack align="center">
                <BlueTitleMedium text="GARA AGONISTICA" />
                <ParagraphText>23km 2100D+</ParagraphText>
              </Stack>
              <Stack align="center">
                <BlueTitleMedium text="GARA AMATORIALE" />
                <ParagraphText>12km 1000D+</ParagraphText>
              </Stack>
            </Container>
          </Container>
          <Stack mt="xl" align="center">
            <Trail style={{ width: rem(640) }} />
            <ButtonSecondary text="Dettagli" />
          </Stack>
        </PageSection>
        <Space h={rem(240)} />
        <PageSection>
          <Stack gap={0}>
            <Flex className={classes.tableRow}>
              <RowTitle text="PROGRAMMA" />
              <Flex gap="xl" mr="xl" align="center">
                <ParagraphText>Come è strutturata la gara?</ParagraphText>
                <ArrowRight />
              </Flex>
            </Flex>
            <Flex className={classes.tableRow}>
              <RowTitle text="REGOLAMENTO" />
              <Flex gap="xl" mr="xl" align="center">
                <ParagraphText>Quali regole seguire?</ParagraphText>
                <ArrowRight />
              </Flex>
            </Flex>
            <Flex className={classes.tableRow}>
              <RowTitle text="MONTEPREMI" />
              <Flex gap="xl" mr="xl" align="center">
                <ParagraphText>Cosa c'è in palio?</ParagraphText>
                <ArrowRight />
              </Flex>
            </Flex>
            <Flex className={classes.tableRow}>
              <RowTitle text="ISCRIZIONE" />
              <Flex gap="xl" mr="xl" align="center">
                <ButtonPrimary text="Iscriviti" />
              </Flex>
            </Flex>
          </Stack>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default TrailHomePage;
