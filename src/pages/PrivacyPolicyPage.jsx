import { Stack, Text, rem } from "@mantine/core";
import Heading from "../components/shared/Heading";
import PageContainer from "../components/shared/PageContainer";
import classes from "./PrivacyPolicyPage.module.css";
import ParagraphText from "../components/shared/ParagraphText";
import PageSection from "../components/shared/PageSection";
import HighlightedText from "../components/shared/HighlightedText";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Heading title="TERMINI e CONDIZIONI" subtitle="PRIVACY POLICY" />
      <PageContainer>
        <PageSection>
          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Informativa Cookie" />
            </ParagraphText>
            <ParagraphText>
              Con il presente documento, ai sensi degli artt. 13 e 122 del D.
              Lgs. 196/2003 ("codice privacy"), e in base a quanto previsto dal
              Provvedimento generale del Garante privacy dell'8 maggio 2014, si
              forniscono agli utenti del sito Brenta Wild Race
              (https://brentawildrace.it) alcune informazioni relative ai cookie
              utilizzati.
            </ParagraphText>
          </Stack>
          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Cosa sono i cookie" />
            </ParagraphText>
            <ParagraphText>
              Un "cookie" è un piccolo file di testo creato sul computer
              dell'utente al momento in cui questo accede ad un determinato
              sito, con lo scopo di immagazzinare e trasportare informazioni. I
              cookie sono inviati da un server web (che è il computer sul quale
              è in esecuzione il sito web visitato) al browser dell'utente
              (Internet Explorer, Mozilla Firefox, Google Chrome, ecc.) e
              memorizzati sul computer di quest'ultimo; vengono, quindi,
              re-inviati al sito web al momento delle visite successive. Nel
              corso della navigazione l'utente potrebbe ricevere sul suo
              terminale anche cookie di siti diversi (cookies di "terze parti"),
              impostati direttamente da gestori di detti siti web e utilizzati
              per le finalità e secondo le modalità da questi definiti.
            </ParagraphText>
          </Stack>
          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Tipologie di cookie" />
            </ParagraphText>
            <ParagraphText>Questo sito non fa uso di cookie.</ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Cookie tecnici essenziali" />
            </ParagraphText>
            <ParagraphText>
              Sono necessari al corretto funzionamento del sito.
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Cookie di terze parti" />
            </ParagraphText>
            <ParagraphText>
              Attraverso il sito Brentaskyrace (https://brentawildrace.it) sono
              installati alcuni cookie di terze parti. Si tratta di cookie
              relativi a:
            </ParagraphText>
            <ul>
              <li>
                <ParagraphText>
                  Monitoraggio delle visite al sito: viene utilizzato lo
                  strumento ShinyStat per raccogliere dati sulla navigazione del
                  sito da parte degli utenti. Si tratta di informazioni utili
                  per verificare cosa funziona e cosa invece va migliorato.
                  Consentono ad esempio di sapere quali sono le pagine più
                  visitate, quanto tempo dura in media una visita al sito, etc.
                  Le informazioni raccolte in questo modo sono tutte
                  rigorosamente in forma aggregata e anonima, non riconducibili
                  a singoli individui. Per consultare l'informativa privacy
                  della società ShinyStat, titolare autonomo del trattamento dei
                  dati relativi al servizio di statistica, è possibile visitare
                  http://www.shinystat.com/it/informativa_privacy_generale_free.html
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  NID, PREF: Utilizzati da Google Maps per personalizzare
                  l'esperienza utente sulle loro mappe.
                </ParagraphText>
              </li>
            </ul>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Interazione con i social network" />
            </ParagraphText>
            <ParagraphText>
              Interazione con i social network: si tratta di strumenti di terze
              parti che espongono modalità di interazione con i social network.
              Ad esempio i sistemi di condivisione di un contenuto su Facebook e
              Twitter: i cookie in questo casi sono necessari per il
              funzionamento del meccanismo di condivisione. Di seguito si
              elencano i collegamenti alle cookie policy dei principali Social
              Network:
              <ul>
                <li>
                  <ParagraphText>Twitter</ParagraphText>
                </li>
                <li>
                  <ParagraphText>Facebook</ParagraphText>
                </li>
                <li>
                  <ParagraphText>Linkedin</ParagraphText>
                </li>
                <li>
                  <ParagraphText>Google (Goole+, Youtube)</ParagraphText>
                </li>
              </ul>
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Modalità del trattamento" />
            </ParagraphText>
            <ParagraphText>
              Il trattamento viene effettuato con strumenti automatizzati dal
              Titolare. Non viene effettuata alcuna diffusione o comunicazione.
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Conferimento dei dati" />
            </ParagraphText>
            <ParagraphText>
              Fatta eccezione per i cookie tecnici strettamente necessari alla
              normale navigazione, il conferimento dei dati è rimesso alla
              volontà dell'interessato che decida di navigare sul sito dopo aver
              preso visione dell'informativa breve contenuta nell'apposito
              banner e di usufruire dei servizi che comportano l'installazione
              di cookie (così per la condivisione dei contenuti sui Social
              Network). L'interessato può quindi evitare l'installazione dei
              cookie mantenendo il banner (astenendosi quindi dal chiuderlo
              cliccando sul tasto "ok"), nonché attraverso le apposite funzioni
              disponibili sul proprio browser.
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Disabilitazione dei cookie" />
            </ParagraphText>
            <ParagraphText>
              Fermo restando quanto sopra indicato in ordine ai cookie
              strettamente necessari alla navigazione, l'utente può eliminare
              gli altri cookie attraverso la funzionalità a tal fine messa a
              disposizione dal Titolare tramite la presente informativa oppure
              direttamente tramite il proprio browser. Ciascun browser presenta
              procedure diverse per la gestione delle impostazioni. L'utente può
              ottenere istruzioni specifiche attraverso i seguenti link:
            </ParagraphText>
            <ul>
              <li>
                <ParagraphText>Google Chrome</ParagraphText>
              </li>
              <li>
                <ParagraphText>Mozilla Firefox</ParagraphText>
              </li>
              <li>
                <ParagraphText>Microsoft Windows Explorer</ParagraphText>
              </li>
              <li>
                <ParagraphText>Apple Safari</ParagraphText>
              </li>
            </ul>
            <ParagraphText>
              La disattivazione dei cookie di terze parti è inoltre possibile
              attraverso le modalità rese disponibili direttamente dalla società
              terza, come indicato ai link riportati nel paragrafo "cookie di
              terze parti" Per avere informazioni sui cookie archiviati sul
              proprio terminale e disattivarli singolarmente si rinvia al link:
              http:// www.youronlinechoices.com/it/le-tue-scelte
            </ParagraphText>
          </Stack>

          <Stack gap={rem(8)}>
            <ParagraphText>
              <HighlightedText text="Diritti dell'interessato" />
            </ParagraphText>
            <ParagraphText>
              L'interessato potrà far valere in ogni momento, rivolgendosi al
              titolare del trattamento tramite l'invio di una mail all'indirizzo
              info@brentaskyrace.it, i diritti di cui all'art. 7 del D.Lgs. 30
              giugno 2003 n. 196, che di seguito si riporta testualmente. Art. 7
              D. Lgs. 196/2003
            </ParagraphText>
            <ol>
              <li>
                <ParagraphText>
                  L'interessato ha diritto di ottenere la conferma
                  dell'esistenza o meno di dati personali che lo riguardano,
                  anche se non ancora registrati, e la loro comunicazione in
                  forma intelligibile.
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  L'interessato ha diritto di ottenere l'indicazione:
                </ParagraphText>
              </li>
              <ul>
                <li>
                  <ParagraphText>
                    dell'origine dei dati personali;
                  </ParagraphText>
                </li>
              </ul>
              <ul>
                <li>
                  <ParagraphText>
                    delle finalità e modalità del trattamento;
                  </ParagraphText>
                </li>
              </ul>
              <ul>
                <li>
                  <ParagraphText>
                    della logica applicata in caso di trattamento effettuato con
                    l'ausilio di strumenti elettronici;
                  </ParagraphText>
                </li>
              </ul>
              <ul>
                <li>
                  <ParagraphText>
                    degli estremi identificativi del titolare, dei responsabili
                    e del rappresentante designato ai sensi dell'articolo 5,
                    comma 2; e) dei soggetti o delle categorie di soggetti ai
                    quali i dati personali possono essere comunicati o che
                    possono venirne a conoscenza in qualità di rappresentante
                    designato nel territorio dello Stato, di responsabili o
                    incaricati.
                  </ParagraphText>
                </li>
              </ul>
              <li>
                <ParagraphText>
                  L'interessato ha diritto di ottenere:
                </ParagraphText>
              </li>
              <ul>
                <li>
                  <ParagraphText>
                    l'aggiornamento, la rettificazione ovvero, quando vi ha
                    interesse, l'integrazione dei dati;
                  </ParagraphText>
                </li>
              </ul>
              <ul>
                <li>
                  <ParagraphText>
                    la cancellazione, la trasformazione in forma anonima o il
                    blocco dei dati trattati in violazione di legge, compresi
                    quelli di cui non è necessaria la conservazione in relazione
                    agli scopi per i quali i dati sono stati raccolti o
                    successivamente trattati; c) l'attestazione che le
                    operazioni di cui alle lettere a) e b) sono state portate a
                    conoscenza, anche per quanto riguarda il loro contenuto, di
                    coloro ai quali i dati sono stati comunicati o diffusi,
                    eccettuato il caso in cui tale adempimento si rivela
                    impossibile o comporta un impiego di mezzi manifestamente
                    sproporzionato rispetto al diritto tutelato.
                  </ParagraphText>
                </li>
              </ul>
              <li>
                <ParagraphText>
                  L'interessato ha diritto di opporsi, in tutto o in parte:
                </ParagraphText>
              </li>
              <ul>
                <li>
                  <ParagraphText>
                    per motivi legittimi al trattamento dei dati personali che
                    lo riguardano, ancorché pertinenti allo scopo della
                    raccolta;
                  </ParagraphText>
                </li>
              </ul>
              <ul>
                <li>
                  <ParagraphText>
                    al trattamento di dati personali che lo riguardano a fini di
                    invio di materiale pubblicitario o di vendita diretta o per
                    il compimento di ricerche di mercato o di comunicazione
                    commerciale.
                  </ParagraphText>
                </li>
              </ul>
            </ol>
          </Stack>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default PrivacyPolicyPage;
