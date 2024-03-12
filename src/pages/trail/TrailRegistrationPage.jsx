import Heading from "../../components/shared/Heading";
import { Container, Stack, Text } from "@mantine/core";
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
        Domenica <HighlightedText text="07 Luglio 2024" />.
      </ParagraphText>
      <ParagraphText>
        Le <HighlightedText text="iscrizioni" /> si aprono il giorno{" "}
        <HighlightedText text="15 Marzo 2024" /> e si chiudono il giorno{" "}
        <HighlightedText text="02 Luglio 2024" />.
      </ParagraphText>
      <div className={classes.alert}>
        <IconAlertTriangle color="var(--mantine-color-orangeBrenta-0)" />
        <ParagraphText>Limite di iscritti: 200.</ParagraphText>
      </div>
    </>
  );
};

const PricesTable = () => {
  return (
    <Container fluid className={classes.table}>
      <Container fluid className={classes.tableColumn}>
        <BlueTitleMedium text="BRENTA WILDRACE" />
        <Text className={classes.tableSubtitle}>23km 2000m D+</Text>
        <Text className={classes.tableRow}>€39 fino a 30 Aprile 2024</Text>
        <Text className={classes.tableRow}>€44 fino a 31 Maggio 2024</Text>
        <Text className={classes.tableLastRow}>€49 fino a 02 Luglio 2024</Text>
      </Container>
      <Container fluid className={classes.tableColumn}>
        <BlueTitleMedium text="BRENTA WILDRUN" />
        <Text className={classes.tableSubtitle}>14km 1200m D+</Text>
        <Text className={classes.tableRow}>€34 fino a 30 Aprile 2024</Text>
        <Text className={classes.tableRow}>€39 fino a 31 Maggio 2024</Text>
        <Text className={classes.tableLastRow}>€44 fino a 02 Luglio 2024</Text>
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
        <ParagraphText>Pettorale con chip, cronometraggio</ParagraphText>
      </li>
      <li>
        <ParagraphText>
          Pacco gara (ATTENZIONE: non abbiamo ancora stabilito il pacco gara)
        </ParagraphText>
      </li>
      <li>
        <ParagraphText>Servizi igienici alla partenza</ParagraphText>
      </li>
      <li>
        <ParagraphText>Parcheggio gratuito alla partenza</ParagraphText>
      </li>
      <li>
        <ParagraphText>
          Ben 8 ristori lungo il percorso di cui 5 completi e 3 solo idrici
        </ParagraphText>
      </li>
      <li>
        <ParagraphText>
          Servizio recupero bastoncini presso Malga Termoncello per poter
          affrontare la discesa più comodamente
        </ParagraphText>
      </li>
      <li>
        <ParagraphText>
          Servizio docce dopo la gara presso il campo sportivo di Denno
        </ParagraphText>
      </li>
      <li>
        <ParagraphText>
          Bus navetta per raggiungere le docce e per il rientro in zona pranzo /
          premiazioni
        </ParagraphText>
      </li>
      <li>
        <ParagraphText>
          Buono pasto, classifiche finali, foto scaricabili dal nostro sito
        </ParagraphText>
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
          <Stack gap="lg">
            <PageSectionTitle text="INFORMAZIONI" />
            <InfoDetails />
          </Stack>
        </PageSection>
        <PageSection>
          <PageSectionTitle text="QUOTE" />
          <PricesTable />
        </PageSection>
        <PageSection>
          <Stack gap="lg">
            <PageSectionTitle text="COME ISCRIVERSI" />
            <RegistrationInstructions />
          </Stack>
        </PageSection>
        <PageSection>
          <Stack gap="lg">
            <PageSectionTitle text="Cosa comprende l'iscrizione?" />
            <RegistrationDetails />
          </Stack>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default TrailRegistrationPage;
