import Heading from "../../components/shared/Heading";
import {
  Alert,
  Container,
  Text,
  Title,
  rem,
  useMantineTheme,
} from "@mantine/core";
import classes from "./TrailRegistrationPage.module.css";
import PageContainer from "../../components/shared/PageContainer";
import { IconAlertTriangle } from "@tabler/icons-react";
import BlueTitle from "../../components/shared/BlueTitle";
import ButtonPrimary from "../../components/shared/ButtonPrimary";
import ButtonSecondary from "../../components/shared/ButtonSecondary";

const TrailRegistrationPage = () => {
  const theme = useMantineTheme();

  return (
    <>
      <Heading title="ISCRIZIONE" subtitle="LA GARA" />
      <PageContainer>
        <section className={classes.info}>
          <Title
            order={4}
            mb="lg"
            fz={{
              base: rem(24),
              xs: rem(32),
              sm: rem(40),
            }}
          >
            INFORMAZIONI
          </Title>
          <Text fz={{ base: "md", xs: "lg" }}>
            La gara <span className={classes.highlight}>Brenta Wild Race</span>{" "}
            si terrà il giorno Domenica{" "}
            <span className={classes.highlight}>07/07/2024</span>.
          </Text>
          <Text fz={{ base: "md", xs: "lg" }}>
            Le <span className={classes.highlight}>iscrizioni</span> si aprono
            il giorno <span className={classes.highlight}>15/03/2024</span> e si
            chiudono il giorno{" "}
            <span className={classes.highlight}>02/07/2024</span>.
          </Text>
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
        </section>
        <section className={classes.info}>
          <Title
            order={4}
            mb="lg"
            fz={{
              base: rem(24),
              xs: rem(32),
              sm: rem(40),
            }}
          >
            QUOTE
          </Title>
          <Container fluid className={classes.table}>
            <Container fluid className={classes.tableColumn}>
              <Title
                order={4}
                fz={{
                  base: rem(24),
                  xs: rem(28),
                  sm: theme.other.fontSizesTitles.fontSizeh6_32px,
                }}
                fw={theme.other.fontWeights.medium}
                c="bluePrimary.0"
              >
                GARA AGONISTICA
              </Title>
              <Text className={classes.tableSubtitle}>23km 2100D+</Text>
              <Text className={classes.tableRow}>€23 fino a 31/03/2024</Text>
              <Text className={classes.tableRow}>€28 fino a 15/06/2024</Text>
              <Text className={classes.tableLastRow}>
                €33 fino a 09/07/2024
              </Text>
            </Container>
            <Container fluid className={classes.tableColumn}>
              <Title
                order={4}
                fz={{
                  base: rem(24),
                  xs: rem(28),
                  sm: theme.other.fontSizesTitles.fontSizeh6_32px,
                }}
                fw={theme.other.fontWeights.medium}
                c="bluePrimary.0"
              >
                GARA AMATORIALE
              </Title>
              <Text className={classes.tableSubtitle}>12km 1000D+</Text>
              <Text className={classes.tableRow}>€18 fino a 31/03/2024</Text>
              <Text className={classes.tableRow}>€23 fino a 15/06/2024</Text>
              <Text className={classes.tableLastRow}>
                €28 fino a 09/07/2024
              </Text>
            </Container>
          </Container>
        </section>
        <section className={classes.info}>
          <Title
            order={4}
            mb="lg"
            fz={{
              base: rem(24),
              xs: rem(32),
              sm: rem(40),
            }}
          >
            COME ISCRIVERSI
          </Title>
          <Text fz={{ base: "md", xs: "lg" }}>
            E’ possibile iscriversi cliccando sul bottone “Iscriviti” qui sotto:
            si verrà reindirizzati al sito di{" "}
            <span className={classes.highlight}>Wedosport</span>, nostro partner
            in iscrizioni e cronometraggio.
          </Text>
          <ButtonPrimary text="Iscriviti" style={{ alignSelf: "flex-start" }} />
        </section>
        <aside className={classes.info}>
          <Title
            order={6}
            mb="lg"
            fz={{
              base: rem(24),
              xs: rem(32),
              sm: rem(40),
            }}
            lh={rem(32)}
          >
            Cosa comprende l'iscrizione?
          </Title>
          <ul>
            <li>
              <Text fz={{ base: "md", xs: "lg" }}>
                Pettorale gara con chip, cronometraggio, servizi igienici alla
                partenza
              </Text>
            </li>
            <li>
              <Text fz={{ base: "md", xs: "lg" }}>Pacco gara</Text>
            </li>
            <li>
              <Text fz={{ base: "md", xs: "lg" }}>
                Parcheggio gratuito alla partenza
              </Text>
            </li>
            <li>
              <Text fz={{ base: "md", xs: "lg" }}>
                Ristori lungo il percorso e all’arrivo
              </Text>
            </li>
            <li>
              <Text fz={{ base: "md", xs: "lg" }}>
                Servizio recupero bastoncini a malga Termoncello I° e II°
                passaggio
              </Text>
            </li>
            <li>
              <Text fz={{ base: "md", xs: "lg" }}>
                Servizio docce presso la partenza/arrivo
              </Text>
            </li>
            <li>
              <Text fz={{ base: "md", xs: "lg" }}>Buono pasto</Text>
            </li>
            <li>
              <Text fz={{ base: "md", xs: "lg" }}>
                Classifiche finali e foto
              </Text>
            </li>
          </ul>
        </aside>
      </PageContainer>
    </>
  );
};

export default TrailRegistrationPage;
