import Heading from "../../components/shared/Heading";
import { Alert, Container, Text } from "@mantine/core";
import classes from "./TrailRegistrationPage.module.css";
import PageContainer from "../../components/shared/PageContainer";
import { IconAlertTriangle } from "@tabler/icons-react";
import ButtonPrimary from "../../components/shared/ButtonPrimary";
import PageSection from "../../components/shared/PageSection";
import PageSectionTitle from "../../components/shared/PageSectionTitle";
import ParagraphText from "../../components/shared/ParagraphText";
import BlueTitleMedium from "../../components/shared/BlueTitleMedium";
import HighlightedText from "../../components/shared/HighlightedText";

const InfoDetails = () => {
  return (
    <>
      <ParagraphText>
        La gara <HighlightedText text="Brenta Wild Race" /> si terrà il giorno
        Domenica <HighlightedText text="07/07/2024" />.
      </ParagraphText>
      <ParagraphText>
        Le <HighlightedText text="iscrizioni" /> si aprono il giorno{" "}
        <HighlightedText text="15/03/2024" /> e si chiudono il giorno{" "}
        <HighlightedText text="02/07/2024" />.
      </ParagraphText>
      <Alert
        variant="outline"
        color="orangeBrenta.0"
        title="Limite di iscritti: 200 per ciascuna variante di percorso."
        icon={<IconAlertTriangle />}
        classNames={{
          label: classes.label,
          icon: classes.icon,
          wrapper: classes.wrapper,
        }}
      ></Alert>
    </>
  );
};

const PricesTable = () => {
  return (
    <Container fluid className={classes.table}>
      <Container fluid className={classes.tableColumn}>
        <BlueTitleMedium text="GARA AGONISTICA" />
        <Text className={classes.tableSubtitle}>23km 2100D+</Text>
        <Text className={classes.tableRow}>€23 fino a 31/03/2024</Text>
        <Text className={classes.tableRow}>€28 fino a 15/06/2024</Text>
        <Text className={classes.tableLastRow}>€33 fino a 09/07/2024</Text>
      </Container>
      <Container fluid className={classes.tableColumn}>
        <BlueTitleMedium text="GARA AMATORIALE" />
        <Text className={classes.tableSubtitle}>12km 1000D+</Text>
        <Text className={classes.tableRow}>€18 fino a 31/03/2024</Text>
        <Text className={classes.tableRow}>€23 fino a 15/06/2024</Text>
        <Text className={classes.tableLastRow}>€28 fino a 09/07/2024</Text>
      </Container>
    </Container>
  );
};

const RegistrationInstructions = () => {
  return (
    <>
      <ParagraphText>
        E' possibile iscriversi cliccando sul bottone “Iscriviti” qui sotto: si
        verrà reindirizzati al sito di <HighlightedText text="Wedosport" />,
        nostro partner in iscrizioni e cronometraggio.
      </ParagraphText>
      <ButtonPrimary text="Iscriviti" style={{ alignSelf: "flex-start" }} />
    </>
  );
};

const RegistrationDetails = () => {
  return (
    <ul>
      <li>
        <ParagraphText>
          Pettorale gara con chip, cronometraggio, servizi igienici alla
          partenza
        </ParagraphText>
      </li>
      <li>
        <ParagraphText>Pacco gara</ParagraphText>
      </li>
      <li>
        <ParagraphText>Parcheggio gratuito alla partenza</ParagraphText>
      </li>
      <li>
        <ParagraphText>Ristori lungo il percorso e all’arrivo</ParagraphText>
      </li>
      <li>
        <ParagraphText>
          Servizio recupero bastoncini a malga Termoncello I° e II° passaggio
        </ParagraphText>
      </li>
      <li>
        <ParagraphText>Servizio docce presso la partenza/arrivo</ParagraphText>
      </li>
      <li>
        <ParagraphText>Buono pasto</ParagraphText>
      </li>
      <li>
        <ParagraphText>Classifiche finali e foto</ParagraphText>
      </li>
    </ul>
  );
};

const TrailRegistrationPage = () => {
  return (
    <>
      <Heading title="ISCRIZIONE" subtitle="LA GARA" />
      <PageContainer>
        <PageSection>
          <PageSectionTitle text="INFORMAZIONI" />
          <InfoDetails />
        </PageSection>
        <PageSection>
          <PageSectionTitle text="QUOTE" />
          <PricesTable />
        </PageSection>
        <PageSection>
          <PageSectionTitle text="COME ISCRIVERSI" />
          <RegistrationInstructions />
        </PageSection>
        <PageSection>
          <PageSectionTitle text="Cosa comprende l'iscrizione?" />
          <RegistrationDetails />
        </PageSection>
      </PageContainer>
    </>
  );
};

export default TrailRegistrationPage;
