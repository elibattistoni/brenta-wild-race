import { Container, Flex, Stack, em, rem } from "@mantine/core";
import Heading from "../../components/shared/Heading";
import PageContainer from "../../components/shared/PageContainer";
import PageSection from "../../components/shared/PageSection";
import PageSectionTitle from "../../components/shared/PageSectionTitle";
import BlueTitleMedium from "../../components/shared/BlueTitleMedium";
import ParagraphText from "../../components/shared/ParagraphText";
import Trail from "../../assets/trail-1.svg?react";
import classes from "./TrailPathVariantsPage.module.css";
import HighlightedText from "../../components/shared/HighlightedText";
import DownloadButton from "../../components/shared/DownloadButton";
import {
  useHover,
  useInViewport,
  useIntersection,
  useMediaQuery,
} from "@mantine/hooks";
import { useRef } from "react";

const AltimetriaSection = () => {
  return (
    <PageSection>
      <PageSectionTitle text="ALTIMETRIA - MAPPA e CARTINA del PERCORSO" />
      <ParagraphText>Stay Tuned!</ParagraphText>
    </PageSection>
  );
};

const TrailDescriptionSection = () => {
  return (
    <PageSection>
      <PageSectionTitle text="DESCRIZIONE del PERCORSO" />
      <Stack gap="xl">
        <Stack gap={rem(4)}>
          <ParagraphText>
            <HighlightedText text="Il contesto" />
          </ParagraphText>
          <ParagraphText>
            Il settore Nord orientale delle Dolomiti di Brenta, detto anche
            sottogruppo della Campa, è un complesso montuoso dal fascino
            particolare. L'ambiente molto selvaggio e incontaminato ne fa
            un'oasi ideale per molte specie di fauna alpina, dall'orso bruno al
            capriolo, dal camoscio alla marmotta, dal gallo cedrone all'aquila
            reale. In questo splendido teatro domenica 12 luglio 2020, va in
            scena la quarta edizione della Brenta Wildrace. Gara tosta per
            skyrunners veri, ma anche un'occasione per attraversare dei luoghi
            incantati, verdi pascoli, creste vertiginose e panorami sconfinati.
          </ParagraphText>
        </Stack>

        <Stack gap={rem(4)}>
          <ParagraphText>
            <HighlightedText text="La partenza" />
          </ParagraphText>
          <ParagraphText>
            Ore 8.30, al centro Sportivo di Campodenno si parte.
          </ParagraphText>
        </Stack>

        <Stack gap={rem(4)}>
          <ParagraphText>
            <HighlightedText text="I primi km fino a Malga Arza (secondo ristoro)" />
          </ParagraphText>
          <ParagraphText>
            Inizia subito la salita, che si rivelerà per ora molto corribile.
            Abbiamo percorso solo un paio di km, siamo ancora freschi.
            Imbocchiamo il ripido sentiero delle Scalazze. Un'antica via
            d'accesso alla montagna che ci permette di prendere quota
            rapidamente attraverso un profondo canyon scavato nella roccia.
            Saliamo ancora circa un km e improvvisamente tutto cambia. Usciamo
            dal bosco e attraversiamo i verdi pascoli di Malga Arza. Una strada
            perfettamente pianeggiante ci conduce alla Malga nonchè secondo
            ristoro (3,5 km 1507 m).
          </ParagraphText>
        </Stack>

        <Stack gap={rem(4)}>
          <ParagraphText>
            <HighlightedText text="Da Malga Arza a Malga Tremoncello (terzo ristoro)" />
          </ParagraphText>
          <ParagraphText>
            Proseguiamo ancora per qualche centinaio di metri su strada
            sterrata, fino a giungere a un bivio. Prendiamo a destra e
            imbocchiamo il sentiero del Parìs. La pendenza non è eccessiva, si
            può correre per buoni tratti salvo qualche strappetto più
            impegnativo. Il sentiero lungo circa 3,5 km, ci conduce a Malga
            Termoncello, dove troviamo il terzo ristoro (7 km. 1860 m). Il
            panorama si fa interessante. A Nord-est iniziamo a vedere l'alta Val
            di Non e in lontananza scorgiamo le Dolomiti della Val di Fassa con
            il Latemar e il Catinaccio in prima fila, mentre a ovest spicca la
            maestosa catena di vette che dal Passo del Grosté giunge fino al
            Monte Peller. Il ristoro ci voleva, si riparte.
          </ParagraphText>
        </Stack>

        <Stack gap={rem(4)}>
          <ParagraphText>
            <HighlightedText text="Da Malga Tremoncello a Malga Campa (quarto ristoro)" />
          </ParagraphText>
          <ParagraphText>
            Aggiriamo a est il monte Bastiot attraverso i "cianaloni". Il
            tracciato alterna delle salite piuttosto ripide a delle brevi
            discese. Man mano che prendiamo quota lo scenario cambia. Il verde
            dei larici lascia spazio al grigio della Dolomia. La gara è dura, ma
            improvvisamente le nostre fatiche vengono ripagate da un magnifico
            panorama sul gruppo delle Madonnine con l'imponente piramide di Cima
            Borcola che domina sopra Malga Campa. Scolliniamo infatti sulla
            Bocchetta della Campa (2040 m). La prima parte della discesa è molto
            ripida e tecnica, un cordino metallico ci aiuta nei tratti più
            impegnativi. Dopo un alternanza di brevi salitelle e tratti
            pianeggianti, arriviamo a Malga Campa dove è collocato il quarto
            ristoro (10 km 1978 m).
          </ParagraphText>
        </Stack>

        <Stack gap={rem(4)}>
          <ParagraphText>
            <HighlightedText text="Da Malga Campa alla Bocchetta di Val Strangola (quinto ristoro)" />
          </ParagraphText>
          <ParagraphText>
            Ora ci aspetta l'ultima salita della nostra avventura. Puntiamo
            l'abbeveratoio e proseguiamo dritti per il sentiero 338 in direzione
            sella del montoz, che però abbandoneremo tra un kilometro. La
            vegetazione l'abbiamo lasciata alle spalle, salvo qualche isolato
            larice temerario e alcuni cespugli di pino mugo. In prossimità di
            una roccia imbocchiamo la deviazione che sale sul ripido pascolo, al
            culmine del quale, innumerevoli saliscendi metteranno alla prova gli
            atleti più tenaci. Dopo circa 1,5 km siamo alla Bocchetta di Val
            Strangola (quinto ristoro (13,5 km 2257 m)).
          </ParagraphText>
        </Stack>

        <Stack gap={rem(4)}>
          <ParagraphText>
            <HighlightedText text="Dalla Bocchetta di Val Strangola a Cima Lovertina (Bastiot)" />
          </ParagraphText>
          <ParagraphText>
            Davanti a noi immensi ghiaioni scendono vertiginosi verso la Valle
            di Tovel. Ora un sentiero in leggera discesa intervallato da un paio
            di strappetti, ci conduce rapidamente al Passo degli Inferni. Da qui
            possiamo già vedere la croce di vetta. Ora inizia il tratto più
            tecnico e spettacolare dell'intero percorso. Attraversiamo a
            sinistra il ripido ghiaione che scende verso la Valle degli Inferni,
            quindi saliamo un paio di ripidi camini, protetti da corde fisse, ed
            eccoci sulla cresta sommitale del Monte Bastiot. La cresta non è
            difficile, ma alcuni passaggi necessitano dell'uso delle mani per
            facilitare il superamento di qualche gradone. Davanti a noi una
            croce di ferro ci fa capire che ci siamo, siamo arrivati sulla Cima
            Lovertina (Bastiot). Vale la pena fermarsi qualche secondo anche se
            stiamo disputando una competizione. Il panorama è superbo. Sotto di
            noi la Val di Non, più in là le Dolomiti della Val Gardena e della
            Val di Fassa, il gruppo delle Pale di S. Martino e il Lagorai. A
            nord il gruppo delle maddalene con all'orizzonte, il luccicare della
            cresta di confine. 1100 metri sotto di noi il Lago di Tovel che con
            le sue limpide acque fa da specchio naturale alla catena
            settentrionale del Brenta.
          </ParagraphText>
        </Stack>

        <Stack gap={rem(4)}>
          <ParagraphText>
            <HighlightedText text="La discesa e l'arrivo" />
          </ParagraphText>
          <ParagraphText>
            Ora solo discesa, tanta discesa. Al traguardo mancano ancora 7 km ma
            soprattutto è posizionato 1500 metri più in basso. Un tratto senza
            particolari difficoltà, in meno di 10 minuti ci riporta a Malga
            Termoncello dove troviamo il sesto ristoro (16 km 1860 m). Giriamo a
            destra. Il sentiero è veloce e scorrevole. Un km esatto e siamo a
            Malga Loverdina (1771 m). Poi giù ancora verso valle. Qui si perde
            quota velocemente, per parecchi minuti saremo immersi nella
            selvaggia foresta di larici. Nessuno interromperà la nostra quiete.
            Presto però il sentiero ci porterà sulla strada forestale dove
            troveremo l'ultimo ristoro (18,5 km 1240 m). Si riprende il sentiero
            abbandonato 20 metri prima, il primo tratto è molto facile, in
            leggera discesa, si va veloci. Per poco però. Improvvisamente la
            pendenza aumenta. Una serie di curve molto ripide e molto
            ravvicinate lo rendono piuttosto impegnativo. Al termine della
            discesa giriamo a sinistra e una breve mulattiera dismessa ci
            immette sulla strada del Valon. Ci siamo, manca meno di un km
            all'arrivo. Si sente già la voce dello speaker che annuncia il
            nostro arrivo. Attraverso un ultimo piccolo sentierino costeggiamo
            l'antica chiesetta e l'Eremo di San Pancrazio, ed ecco lo
            striscione. È finita. 23 km, 2100 m di dislivello. Un mix di forza,
            resistenza, coraggio e un pizzico di follia che in uno skyrunner non
            dovrebbe mai mancare. Il tutto inserito in un ambiente selvaggio non
            ancora contaminato dal grande turismo di massa.
          </ParagraphText>
        </Stack>

        <Stack gap={rem(4)}>
          <ParagraphText>
            <HighlightedText text="Differenze tra gara agonistica e amatoriale" />
          </ParagraphText>
          <ParagraphText>
            Sul medesimo percorso, nella sua parte iniziale, si sviluppa la
            BrentaRun, gara più corta ma non meno avvincente!! A malgaArza, a
            quota 1500, anzichè salire ancora verso le cime, inizia la discesa
            che si aggancia sull'ultima parte della wildrace, quindi la
            picchiata, che tutta su dorsale panoramica, conduce all' eremo di S.
            Pancrazio e dopo un ultimo chilometro di discesa, all' arrivo!
          </ParagraphText>
        </Stack>
      </Stack>
      <Flex justify="end">
        <DownloadButton
          fileName="descrizione-percorso-brenta-wild-race.pdf"
          linkToFile="/brenta-wild-race/descrizione-percorso-brenta-wild-race.pdf"
          button="secondary"
          buttonText="Scarica PDF"
        />
      </Flex>
    </PageSection>
  );
};

const RoutesSection = () => {
  const { hovered: hoveredAgonistica, ref: refAgonistica } = useHover();
  const { hovered: hoveredAmatoriale, ref: refAmatoriale } = useHover();

  const isMD = useMediaQuery(`(max-width: ${em(992)})`);

  const containerRefAgonistica = useRef(null);
  const { ref: refSvgAgonistica, entry: entrySvgAgonistica } = useIntersection({
    root: containerRefAgonistica.current,
    threshold: 1,
  });

  const containerRefAmatoriale = useRef(null);
  const { ref: refSvgAmatoriale, entry: entrySvgAmatoriale } = useIntersection({
    root: containerRefAmatoriale.current,
    threshold: 1,
  });

  const isMDagoGlow =
    isMD && entrySvgAgonistica && entrySvgAgonistica.isIntersecting;
  const isMDamaGlow =
    isMD && entrySvgAmatoriale && entrySvgAmatoriale.isIntersecting;

  return (
    <PageSection>
      <PageSectionTitle text="PERCORSO e VARIANTI" />
      <Container fluid className={classes.sectionContent}>
        <Stack align="center">
          <BlueTitleMedium text="PARTENZA / ARRIVO" />
          <ParagraphText>Eremo di San Pancrazio</ParagraphText>
        </Stack>
        <Container fluid className={classes.flex}>
          {/*  */}
          <Stack align="center" ref={refAgonistica}>
            <BlueTitleMedium text="GARA AGONISTICA" />
            <ParagraphText>23km 2100D+</ParagraphText>
            <DownloadButton
              fileName="traccia-gpx-agonistica.gpx"
              linkToFile="/brenta-wild-race/traccia-gpx-agonistica.gpx"
              button="primary"
              buttonText="Scarica GPX"
            />
            <Stack align="center" ref={refSvgAgonistica}>
              <Trail
                className={`${classes.trail} ${
                  hoveredAgonistica ? classes.glow : ""
                } ${isMDagoGlow ? classes.glow : ""}`}
              />
            </Stack>
          </Stack>
          {/*  */}
          <Stack align="center" ref={refAmatoriale}>
            <BlueTitleMedium text="GARA AMATORIALE" />
            <ParagraphText>12km 1000D+</ParagraphText>
            <DownloadButton
              fileName="traccia-gpx-amatoriale.gpx"
              linkToFile="/brenta-wild-race/traccia-gpx-amatoriale.gpx"
              button="primary"
              buttonText="Scarica GPX"
            />
            <Stack align="center" ref={refSvgAmatoriale}>
              <Trail
                className={`${classes.trail} ${
                  hoveredAmatoriale ? classes.glow : ""
                } ${isMDamaGlow ? classes.glow : ""}`}
              />
            </Stack>
          </Stack>
        </Container>
      </Container>
    </PageSection>
  );
};

const TrailPathVariantsPage = () => {
  //>>> TODO ELISA change correct gpx trail
  return (
    <>
      <Heading title="PERCORSO e VARIANTI" subtitle="LA GARA" />
      <PageContainer>
        <RoutesSection />
        <AltimetriaSection />
        <TrailDescriptionSection />
      </PageContainer>
    </>
  );
};

export default TrailPathVariantsPage;
