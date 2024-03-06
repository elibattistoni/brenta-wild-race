import { Container, Stack, rem } from "@mantine/core";
import Heading from "../../components/shared/Heading";
import PageContainer from "../../components/shared/PageContainer";
import PageSection from "../../components/shared/PageSection";
import PageSectionTitle from "../../components/shared/PageSectionTitle";
import BlueTitleMedium from "../../components/shared/BlueTitleMedium";
import ParagraphText from "../../components/shared/ParagraphText";
import Trail from "../../assets/trail-1.svg?react";
import ButtonSecondary from "../../components/shared/ButtonSecondary";
import classes from "./TrailPathVariantsPage.module.css";
import { Link } from "react-router-dom";
// import TracciaGPXAgonistica from "../../assets/traccia-gpx-agonistica.gpx";
// import TracciaGPXAmatoriale from "../../assets/traccia-gpx-amatoriale.gpx";

//!! TODO add descrizione percorso

const DownloadButton = ({ trail }) => {
  //! ELISA TODO CHANGE with correct trail
  return (
    <Link
      to={
        trail === "agonistica"
          ? "/traccia-gpx-agonistica.gpx"
          : "/traccia-gpx-amatoriale.gpx"
      }
      download={`Traccia-GPX-${trail}.gpx`}
      target="_blank"
      rel="noreferrer"
    >
      <ButtonSecondary text="Scarica GPX" style={{ marginTop: rem(24) }} />
    </Link>
  );
};

const TrailPathVariantsPage = () => {
  return (
    <>
      <Heading title="PERCORSO e VARIANTI" subtitle="LA GARA" />
      <PageContainer>
        <PageSection>
          <PageSectionTitle text="PERCORSO e VARIANTI" />
          <Container fluid className={classes.sectionContent}>
            <Stack align="center">
              <BlueTitleMedium text="PARTENZA / ARRIVO" />
              <ParagraphText>Eremo di San Pancrazio</ParagraphText>
            </Stack>
            <Container fluid className={classes.flex} mt={rem(48)}>
              <Stack align="center">
                <BlueTitleMedium text="GARA AGONISTICA" />
                <ParagraphText>23km 2100D+</ParagraphText>
                <DownloadButton trail="agonistica" />
              </Stack>
              <Stack align="center">
                <BlueTitleMedium text="GARA AMATORIALE" />
                <ParagraphText>12km 1000D+</ParagraphText>
                <DownloadButton trail="amatoriale" />
              </Stack>
            </Container>
          </Container>
          <Stack mt="xl" align="center">
            <Trail style={{ width: rem(640) }} />
          </Stack>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default TrailPathVariantsPage;
