import Heading from "../../components/shared/Heading";
import { Alert, Container, Text, Title } from "@mantine/core";
import classes from "./TrailRegistrationPage.module.css";
import PageContainer from "../../components/shared/PageContainer";

const TrailRegistrationPage = () => {
  return (
    <>
      <Heading title="ISCRIZIONE" subtitle="LA GARA" />
      <PageContainer>
        <Title order={4}>INFORMAZIONI</Title>
        <Text size="lg">
          La gara <span className={classes.highlight}>Brenta Wild Race</span> si
          terrà il giorno Domenica{" "}
          <span className={classes.highlight}>07/07/2024</span>.
        </Text>
        <Text size="lg">
          Le <span className={classes.highlight}>iscrizioni</span> si aprono il
          giorno <span className={classes.highlight}>15/03/2024</span> e si
          chiudono il giorno{" "}
          <span className={classes.highlight}>02/07/2024</span>.
        </Text>
        <Alert variant="outline" color="orangeBrenta.0" title="Attenzione">
          Limite di iscritti: 200 per ciascuna variante di percorso.
        </Alert>
      </PageContainer>
    </>
  );
};

export default TrailRegistrationPage;
