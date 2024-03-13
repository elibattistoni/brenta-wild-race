import { Container, Flex, Stack, em, rem } from "@mantine/core";
import Heading from "../../components/shared/Heading";
import PageContainer from "../../components/shared/PageContainer";
import PageSection from "../../components/shared/PageSection";
import PageSectionTitle from "../../components/shared/PageSectionTitle";
import BlueTitleMedium from "../../components/shared/BlueTitleMedium";
import ParagraphText from "../../components/shared/ParagraphText";
import TrailWildRace from "../../assets/brenta-wildrace-trail-gpx-exp-svg.svg?react";
import TrailWildRun from "../../assets/brenta-wildrun-trail-gpx-exp-svg.svg?react";
import classes from "./TrailPathVariantsPage.module.css";
import HighlightedText from "../../components/shared/HighlightedText";
import DownloadButton from "../../components/shared/DownloadButton";
import { useHover, useIntersection, useMediaQuery } from "@mantine/hooks";
import { useRef } from "react";
import BlueTitleSmall from "../../components/shared/BlueTitleSmall";

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
      <Stack gap={rem(8)}>
        <ParagraphText>
          <HighlightedText text="Il contesto" />
        </ParagraphText>
        <ParagraphText>
          Il settore Nord orientale delle Dolomiti di Brenta, identificato come
          sottogruppo della Campa, è un complesso montuoso dal fascino
          particolare. L'ambiente molto selvaggio e incontaminato ne fa un'oasi
          ideale per molte specie di fauna alpina, dall'orso bruno al capriolo,
          dal camoscio alla marmotta, dal gallo cedrone all'aquila reale, e da
          qualche anno si è insediato anche il lupo. In questo splendido teatro
          domenica 7 luglio 2024, va in scena la quarta edizione della Brenta
          Wildrace. Gara tosta per skyrunners veri, ma anche un'occasione per
          attraversare dei luoghi incantati, verdi pascoli, creste vertiginose e
          panorami sconfinati.
        </ParagraphText>
      </Stack>

      <Stack gap={rem(8)}>
        <ParagraphText>
          <HighlightedText text="La partenza" />
        </ParagraphText>
        <ParagraphText>
          Ore 9:00, dal campo volo di Termon si parte.
        </ParagraphText>
      </Stack>

      <Stack gap={rem(8)}>
        <ParagraphText>
          <HighlightedText text="I primi km fino a Malga Arza (secondo ristoro)" />
        </ParagraphText>
        <ParagraphText>
          Inizia subito la salita, che si rivelerà per ora molto corribile.
          Abbiamo percorso solo il primo chilometro, siamo ancora freschi.
          Imbocchiamo la breve ma ripida scalinata delle Scalette, per poi
          riprendere un secondo tratto corribile fino ad imboccare le scalacce:
          un'antica via d'accesso alla montagna che ci permette di prendere
          quota rapidamente attraverso un profondo e suggestivo canyon scavato
          nella roccia, usciti dal quale troviamo già il primo ristoro (solo
          idrico). Saliamo ancora circa un chilometro ed improvvisamente tutto
          cambia, usciamo infatti dal bosco ed attraversiamo i verdi pascoli di
          Malga Arza (1500m), dove una strada perfettamente pianeggiante ci
          conduce alla malga nonché al secondo ristoro. (Abbiamo percorso 5km e
          800mD+ dalla partenza).
        </ParagraphText>
      </Stack>

      <Stack gap={rem(8)}>
        <ParagraphText>
          <HighlightedText text="Da Malga Arza a Malga Tremoncello (terzo ristoro)" />
        </ParagraphText>
        <ParagraphText>
          Proseguiamo ancora per qualche centinaio di metri su strada sterrata,
          fino a giungere a un bivio. Prendiamo a destra e imbocchiamo il
          sentiero del Parìs. La pendenza non è eccessiva, si può correre per
          buoni tratti salvo qualche strappetto più impegnativo. Il sentiero
          lungo circa 3km ci conduce a Malga Termoncello, dove troviamo il terzo
          ristoro. Il panorama si fa davvero interessante: a Nord-est iniziamo a
          vedere l'alta Val di Non ed in lontananza scorgiamo le Dolomiti della
          Val di Fassa con il Latemar e il Catinaccio in prima fila, mentre ad
          ovest spicca la maestosa catena di vette che dal Passo del Grosté
          giunge fino al Monte Peller. Il ristoro ci voleva! Ma ora si riparte.
        </ParagraphText>
      </Stack>

      <Stack gap={rem(8)}>
        <ParagraphText>
          <HighlightedText text="Da Malga Tremoncello a Malga Campa (quarto ristoro)" />
        </ParagraphText>
        <ParagraphText>
          Aggiriamo a est il monte Bastiòt attraverso i "cianaloni". Il
          tracciato alterna delle salite piuttosto ripide a delle brevi discese.
          Man mano che prendiamo quota lo scenario cambia. Il verde dei larici
          lascia spazio al grigio della Dolomia. La gara è dura, ma
          improvvisamente le nostre fatiche vengono ripagate da un magnifico
          panorama sul gruppo delle Madonnine con l'imponente piramide di Cima
          Borcola che domina sopra Malga Campa. Scolliniamo infatti sulla
          Bocchetta della Campa (2040m). La prima parte della discesa è molto
          ripida e tecnica, la presenza di un cordino metallico ci aiuta nei
          tratti più impegnativi. Dopo un'alternanza di brevi salitelle e tratti
          pianeggianti, arriviamo a Malga Campa dove è collocato il quarto
          ristoro.
        </ParagraphText>
      </Stack>

      <Stack gap={rem(8)}>
        <ParagraphText>
          <HighlightedText text="Da Malga Campa alla Bocchetta di Val Strangola (quinto ristoro)" />
        </ParagraphText>
        <ParagraphText>
          Ci aspetta ora l'ultima salita della nostra avventura. Puntiamo
          l’abbeveratoio e proseguiamo dritti per il sentiero 338 in direzione
          della Sella del Montoz, che però abbandoneremo tra circa un
          chilometro. La vegetazione rimane alle nostre spalle, salvo qualche
          isolato larice temerario ed alcuni cespugli di pino mugo. In
          prossimità di una roccia imbocchiamo la deviazione che sale sul ripido
          pascolo, al culmine del quale, innumerevoli saliscendi metteranno alla
          prova gli atleti più tenaci. Dopo circa 1,5km siamo alla Bocchetta di
          Val Strangola dove troviamo il quinto ristoro (solo idrico).
        </ParagraphText>
      </Stack>

      <Stack gap={rem(8)}>
        <ParagraphText>
          <HighlightedText text="Dalla Bocchetta di Val Strangola a Cima Lovertina (Bastiot)" />
        </ParagraphText>
        <ParagraphText>
          Davanti a noi immensi ghiaioni scendono vertiginosi verso la Val di
          Tovel. Ora un sentiero in leggera discesa intervallato da un paio di
          strappetti, ci conduce rapidamente al Passo degli Inferni; da qui
          possiamo già vedere la croce di vetta. Ora inizia il tratto più
          tecnico e spettacolare dell'intero percorso. Attraversiamo a sinistra
          il ripido ghiaione che scende verso la Valle degli Inferni, quindi
          saliamo un paio di ripidi camini, protetti da corde fisse, ed eccoci
          sulla cresta sommitale del Monte Bastiòt. La cresta non è difficile,
          ma alcuni passaggi necessitano dell'uso delle mani per facilitare il
          superamento di qualche gradone. Davanti a noi una croce di ferro ci fa
          capire che ci siamo, siamo arrivati sulla Cima Loverdina 2237m detta
          anche Bastiòt. Vale la pena fermarsi qualche secondo anche se stiamo
          disputando una competizione. Il panorama è superbo. Sotto di noi la
          Val di Non, più in là le Dolomiti della Val Gardena e della Val di
          Fassa, il gruppo delle Pale di S. Martino e il Lagorai. A nord il
          gruppo delle maddalene con all'orizzonte, il luccicare della cresta di
          confine, ed infine possiamo ammirare il Lago di Tovel posto a 1100m
          sotto di noi, che con le sue limpide acque fa da specchio naturale
          alla catena settentrionale del Brenta.
        </ParagraphText>
      </Stack>

      <Stack gap={rem(8)}>
        <ParagraphText>
          <HighlightedText text="La discesa e l'arrivo" />
        </ParagraphText>
        <ParagraphText>
          Ora solo discesa, tanta discesa. Al traguardo mancano ancora 8km ma
          soprattutto 1500m di dislivello. Un tratto senza particolari
          difficoltà, in meno di 10 minuti ci riporta a Malga Termoncello dove
          possiamo fermarci nuovamente al ristoro dell'andata. Giriamo a destra.
          Il sentiero è veloce e scorrevole. Un chilometro esatto e siamo a
          Malga Loverdina (1771m). Poi giù ancora verso valle. Qui si perde
          quota velocemente, per parecchi minuti saremo immersi nella selvaggia
          foresta di larici e faggi. Nessuno interromperà la nostra quiete.
          Presto però il sentiero ci porterà sulla strada forestale, che non
          percorreremo ma la attraverseremo soltanto. Si riprende infatti subito
          il sentiero abbandonato 20 metri prima, il primo tratto è molto
          facile, in leggera discesa, si va veloci. Per poco però.
          Improvvisamente la pendenza aumenta. Una serie di curve molto ripide e
          molto ravvicinate lo rendono piuttosto impegnativo. Al termine della
          discesa giriamo a sinistra e una breve mulattiera dismessa ci immette
          sulla strada sterrata del Valon, ed in poche centinaia di metri
          arriviamo alla località San Pancrazio, con il caratteristico eremo,
          dove troviamo l'ultimo ristoro del percorso (solo idrico). Lasciamo
          San Pancrazio alle spalle e ci prepariamo all'ultimo, breve tratto in
          discesa, lungo un sentiero che ci porta sul rinomato sentiero
          Margherita. Ci siamo, mancano appena km all'arrivo. A questo punto il
          sentiero Margherita, in realtà largo come una strada forestale,
          perfettamente pianeggiante ci porta in breve tempo presso la pineta di
          Termon, passiamo davanti al Baitel, la location che ci ospiterà per il
          pranzo e la festa per il miglior intrattenimento musicale e
          folkloristico, a questo punto si sente già la voce dello speaker che
          annuncia il nostro arrivo. Le ultimissime centinaia di metri ci
          riportano al campo volo, luogo della partenza, lo percorriamo tutto in
          discesa ed ecco lo striscione dell'arrivo. È finita. 23km, 2000m di
          dislivello. Un mix di forza, resistenza, coraggio e un pizzico di
          follia che in uno skyrunner non dovrebbe mai mancare. Il tutto
          inserito in un ambiente selvaggio non ancora contaminato dal grande
          turismo di massa.
        </ParagraphText>
      </Stack>

      <Stack gap={rem(8)}>
        <ParagraphText>
          <HighlightedText text="Differenze tra gara agonistica e amatoriale" />
        </ParagraphText>
        <ParagraphText>
          Sul medesimo percorso, nella sua parte iniziale, si sviluppa la Brenta
          Wild Run, gara più corta ma non meno avvincente!! A malga Termoncello,
          a quota 1800m, anzichè salire ancora verso le cime, inizia la discesa
          che si aggancia sull'ultima parte della Wildrace, quindi la picchiata,
          che tutta su dorsale panoramica, conduce all'eremo di San Pancrazio e
          con lgi ultimissimi chilometri, all'arrivo!
        </ParagraphText>
      </Stack>
      <Flex justify="end">
        <DownloadButton
          fileName="descrizione-percorso-brenta-wildrace.pdf"
          linkToFile="/descrizione-percorso-brenta-wildrace.pdf"
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

  const isMDagoGlowOrHover =
    (isMD && entrySvgAgonistica && entrySvgAgonistica.isIntersecting) ||
    hoveredAgonistica;
  const isMDamaGlowOrHover =
    (isMD && entrySvgAmatoriale && entrySvgAmatoriale.isIntersecting) ||
    hoveredAmatoriale;

  return (
    <PageSection>
      <PageSectionTitle text="PERCORSO e VARIANTI" />
      <Container fluid className={classes.sectionContent}>
        <Stack align="center">
          <BlueTitleSmall text="PARTENZA / ARRIVO" />
          <ParagraphText>Eremo di San Pancrazio</ParagraphText>
        </Stack>
        <Container fluid className={classes.flex}>
          <Stack align="center" justify="center" ref={refAgonistica}>
            <BlueTitleSmall text="BRENTA WILDRACE" />
            <ParagraphText>23km 2000m D+</ParagraphText>
            <DownloadButton
              fileName="traccia-gpx-brenta-wildrace.gpx"
              linkToFile="/traccia-gpx-brenta-wildrace.gpx"
              button="primary"
              buttonText="Scarica GPX"
            />
            <Flex align="flex-start" ref={refSvgAgonistica} mb={rem(72)}>
              <TrailWildRace
                className={`${classes.trailLong} ${
                  isMDagoGlowOrHover ? classes.glow : ""
                }`}
              />
            </Flex>
          </Stack>
          <Stack align="center" ref={refAmatoriale}>
            <BlueTitleSmall text="BRENTA WILDRUN" />
            <ParagraphText>14km 1200m D+</ParagraphText>
            <DownloadButton
              fileName="traccia-gpx-brenta-wildrun.gpx"
              linkToFile="/traccia-gpx-brenta-wildrun.gpx"
              button="primary"
              buttonText="Scarica GPX"
            />
            <Flex align="flex-start" ref={refSvgAmatoriale}>
              <TrailWildRun
                className={`${classes.trailShort} ${
                  isMDamaGlowOrHover ? classes.glow : ""
                }`}
              />
            </Flex>
          </Stack>
        </Container>
      </Container>
    </PageSection>
  );
};

const TrailPathVariantsPage = () => {
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
