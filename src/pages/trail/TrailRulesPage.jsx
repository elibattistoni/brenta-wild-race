import { Stack, rem } from "@mantine/core";
import Heading from "../../components/shared/Heading";
import PageContainer from "../../components/shared/PageContainer";
import PageSection from "../../components/shared/PageSection";
import ParagraphText from "../../components/shared/ParagraphText";
import HighlightedText from "../../components/shared/HighlightedText";

const TrailRulesPage = () => {
  return (
    <>
      <Heading title="REGOLAMENTO" subtitle="LA GARA" />
      <PageContainer>
        <PageSection>
          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Età di partecipazione / Documento sanitario" />
            </ParagraphText>
            <ParagraphText>
              Alla Brenta WildRace possono partecipare coloro che hanno compiuto
              i 18 anni di età. Tutti gli atleti devono essere in possesso di un
              certificato medico per la pratica dello sport a livello agonistico
              in corso di validità ai sensi di legge. Questo certificato deve
              essere valido alla data della gara e deve essere presentato al
              momento dell'assegnazione del numero di pettorale.
            </ParagraphText>
          </Stack>
          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Tempo massimo / Cancelli" />
            </ParagraphText>
            <ParagraphText>
              Cancello: al quarto ristoro a Malga Campa, dopo 3 h 15 minuti
              dalla partenza. Il tempo massimo è previsto in 5 ore 45 minuti.
            </ParagraphText>
          </Stack>
          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Doveri del partecipante" />
            </ParagraphText>
            <ul>
              <li>
                <ParagraphText>
                  Indossare in modo visibile durante tutta la gara il numero di
                  pettorale
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  Obbligo che ciascun concorrente sia dotato, alla partenza, di
                  una GIACCA ANTIVENTO. La dotazione verrà controllata a fine
                  corsa. L'atleta che venga trovato senza questo indumento verrà
                  sanzionato con una penalità di 3 minuti
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  Il partecipante deve seguire il tracciato regolarmente
                  indicato
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  I partecipanti fermati ai cancelli di tempo massimo dovranno
                  consegnare il pettorale al responsabile cancello
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  I partecipanti che abbandonano la gara devono darne
                  comunicazione all'organizzazione e consegnare il pettorale
                  agli addetti al controllo sul percorso
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  Non è consentito l'uso di cuffie per l'ascolto di musica
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  E' raccomandato l'utilizzo di scarpe tecniche con suole trail
                </ParagraphText>
              </li>
            </ul>
          </Stack>
          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Bastoncini" />
            </ParagraphText>
            <ParagraphText>
              E' consentito l'uso dei bastoncini. Gli stessi potranno essere
              lasciati alla malga Termoncello (III ristoro) e verranno
              riconsegnati all'arrivo.
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Ristori" />
            </ParagraphText>
            <ParagraphText>
              Sono previsti 6 ristori lungo il persorso, nelle seguenti
              località: Malga Arza, Malga Termoncello, Malga Campa, Bocchetta
              Val Strangola, Malga Loverdina, Doss del Ciaval.
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Responsabilità" />
            </ParagraphText>
            <ParagraphText>
              L'atleta, consapevole della responsabilità per dichiarazioni
              mendaci, riconosce e conferma di aver preso visione diretta del
              percorso di gara e di averlo, nel pieno delle proprie facoltà,
              ritenuto pienamente confacente al proprio livello tecnico; ben
              consapevole che il suddetto percorso presenta tratti con corde
              fisse e passaggi esposti, seppure assistiti dal personale
              dell'organizzazione; di essere in possesso di un curriculum di
              skyrunning adeguato alla competizione cui si iscrive, avendo
              altresì in un recente passato preso parte ad analoghe
              manifestazioni e vantando comunque esperienza di montagna
              confacente ad affrontare il suddetto percorso; di essere stato
              doviziosamente informato dagli organizzatori della potenziale
              pericolosità della manifestazione che si svolge in ambiente di
              montagna con i conseguenti ineliminabili pericoli oggettivi per
              tutti i concorrenti e di intendere, a fronte di detta
              consapevolezza, assumersene ugualmente il rischio; di esonerare
              espressamente gli organizzatori da ogni responsabilità per colpa
              non grave relativamente ad eventuale sinistro di cui l'atleta
              medesimo sia vittima. La società promotrice dichiara di aver
              stipulato apposita assicurazione per la responsabilità civile
              (RC), a copertura dei rischi derivanti dall'organizzazione
              dell'evento stesso. La stessa società non assicura i partecipanti
              alla gara. L'organizzazione, inoltre, non risponde dello
              smarrimento, o sottrazione di effetti e/o beni personali lasciati
              incustoditi prima, durante e dopo la gara in zona partenza/arrivo,
              presso le docce, nella zona pranzo/premiazioni. Al momento del
              ritiro pettorale, l'atleta è chiamato a firmare un modulo di
              consenso informativo e contestuale liberatoria.
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Comportamento" />
            </ParagraphText>
            <ParagraphText>
              Agli atleti è consigliato un comportamento ecologico.La gara
              aderisce al progetto "IO NON GETTO I MIEI RIFIUTI". Si chiede
              pertanto di gettare la spazzatura (es: bottiglie, bicchieri, gel)
              nei cassonetti allestiti lungo il percorso. I concorrenti che
              verranno segnalati per cattiva condotta e comportamento ambientale
              non prudente dovranno affrontare sanzioni fino alla squalifica,
              determinate da una giuria costituita ad hoc.
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Parcheggio" />
            </ParagraphText>
            <ParagraphText>
              Parcheggi sono disponibili presso il campo sportivo di Campodennno
              - Loc. Salvez e presso piazzale Caserma VVF.
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Reclami" />
            </ParagraphText>
            <ParagraphText>
              Sono accettati fino a mezz'ora dopo l'arrivo dell'ultimo
              concorrente. Verrà chiesto il pagamento di una tassa di € 50,00
              che sarà rimborsata in caso di accettazione del reclamo.
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Dichiarazione privacy" />
            </ParagraphText>
            <ParagraphText>
              I partecipanti all'evento iscrivendosi alla manifestazione,
              dichiarano di accettare che vengano utilizzate le immagini, foto
              e/o video che verranno utilizzate per pubblicizzare l'evento e/o
              il territorio per scopi affini e, che i propri dati personali
              vengano inseriti negli archivi dell'Associazione/Organizzatore.
              Questi dati verranno memorizzati e conservati in maniera
              strettamente confidenziale dal comitato organizzatore e saranno
              utilizzati per finalità relative allo svolgimento della gara, in
              conformità della legge n. 675/96 del 31.12.1996, art. 13. In
              qualsiasi momento è possibile correggere o cancellare questi dati.
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Divieto animali" />
            </ParagraphText>
            <ParagraphText>
              Per assicurare le migliori condizioni di sicurezza per tutti i
              partecipanti, è vietato gareggiare facendosi accompagnare da
              animali domestici.
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Modifiche al percorso o cancellazione gara" />
            </ParagraphText>
            <ParagraphText>
              L'organizzazione, in caso di condizioni meteorologiche avverse
              (nebbia, bufere, tempeste) tali da mettere in pericolo la
              sicurezza dei concorrenti e ogni qualvolta lo ritenga necessario,
              si riserva il diritto di modificare in qualsiasi momento il
              percorso e/o il posizionamento dei punti di ristoro, nonché
              l'orario di partenza e il diritto di annullare o sospendere la
              gara. I concorrenti non avranno il diritto ad alcun rimborso della
              quota di iscrizione in caso di sospensione, modifica o di
              annullamento della stessa.
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Servizio di cronometraggio" />
            </ParagraphText>
            <ParagraphText>
              La misurazione dei tempi e l'elaborazione delle classifiche sono
              realizzati dalla Wedosport.
            </ParagraphText>
          </Stack>

          <ParagraphText>
            L'organizzazione si riserva il diritto di modificare e/o integrare
            il presente regolamento. Eventuali variazioni verranno adeguatamente
            segnalate sul nostro sito e profilo facebook, non che riportate in{" "}
            <span style={{ color: "hsl(358, 100%, 35%)" }}>
              GRASSETTO MAIUSCOLO ROSSO
            </span>{" "}
            all'interno di questo documento.
          </ParagraphText>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default TrailRulesPage;
