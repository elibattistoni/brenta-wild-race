import { Container, Text } from "@mantine/core";
import Heading from "../../components/shared/Heading";
import PageContainer from "../../components/shared/PageContainer";
import classes from "./TrailPrizesPage.module.css";
import PageSection from "../../components/shared/PageSection";
import PageSectionTitle from "../../components/shared/PageSectionTitle";
import BlueTitleSmall from "../../components/shared/BlueTitleSmall";
import ParagraphText from "../../components/shared/ParagraphText";
import HighlightedText from "../../components/shared/HighlightedText";

const PrizesTable = () => {
  return (
    <Container fluid className={classes.table}>
      <Container fluid className={classes.tableColumn}>
        <BlueTitleSmall text="UOMINI" />
        <Text className={classes.tableRow}>€200 - Primo Classificato</Text>
        <Text className={classes.tableRow}>€100 - Secondo Classificato</Text>
        <Text className={classes.tableLastRow}>€50 - Terzo Classificato</Text>
      </Container>
      <Container fluid className={classes.tableColumn}>
        <BlueTitleSmall text="DONNE" />
        <Text className={classes.tableRow}>€200 - Prima Classificata</Text>
        <Text className={classes.tableRow}>€100 - Seconda Classificata</Text>
        <Text className={classes.tableLastRow}>€50 - Terza Classificata</Text>
      </Container>
    </Container>
  );
};

const TrailPrizesPage = () => {
  return (
    <>
      <Heading title="MONTEPREMI" subtitle="LA GARA" />
      <PageContainer>
        <PageSection>
          <PageSectionTitle text="PREMI BRENTA WILDRACE" />
          <PrizesTable />
          <ParagraphText>
            Anche coloro che si posizionano tra il{" "}
            <HighlightedText text="quarto" /> e il{" "}
            <HighlightedText text="decimo" /> classificato riceveranno dei
            premi!
          </ParagraphText>
        </PageSection>
        <PageSection>
          <PageSectionTitle text="PREMI BRENTA WILDRUN" />
          <ParagraphText>
            Per la Gara Brenta Wildrun non è previsto un montepremi in denaro,
            ma ci saranno altri premi per coloro che si posizionano tra il{" "}
            <HighlightedText text="primo" /> e il{" "}
            <HighlightedText text="quinto" /> classificato. Anche in questo
            caso, la classifica sarà divisa tra uomini e donne.
          </ParagraphText>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default TrailPrizesPage;
