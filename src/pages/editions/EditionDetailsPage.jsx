import { useParams } from "react-router-dom";
import Heading from "../../components/shared/Heading";
import PageContainer from "../../components/shared/PageContainer";
import PageSection from "../../components/shared/PageSection";
import ParagraphText from "../../components/shared/ParagraphText";
import ErrorPage from "../ErrorPage";
import classes from "./EditionsHomePage.module.css";

const EditionDetailsPage = () => {
  const { year } = useParams();

  if (
    year === "2017" ||
    year === "2018" ||
    year === "2019" ||
    year === "2024" ||
    year === "2025" ||
    year === "2026"
  ) {
    let content;

    if (year === "2017") {
      content = (
        <ul>
          <li>
            <ParagraphText>
              <a
                href="https://www.brentaskyrace.it/partenza-e-arrivi.html"
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Foto delle partenze e arrivi
              </a>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <a
                href="https://www.brentaskyrace.it/foto-della-gara.html"
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Foto della gara
              </a>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <a
                href="https://www.brentaskyrace.it/foto-del-territorio.html"
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Foto del territorio
              </a>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <a
                href="https://www.brentaskyrace.it/video-del-percorso.html"
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Video del percorso
              </a>
            </ParagraphText>
          </li>
        </ul>
      );
    } else if (year === "2018") {
      content = (
        <ul>
          <li>
            <ParagraphText>
              <a
                href="https://www.brentaskyrace.it/partenza-e-arrivi-1.html"
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Foto delle partenze e arrivi
              </a>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <a
                href="https://www.brentaskyrace.it/foto-della-gara-1.html"
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Foto della gara
              </a>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <a
                href="https://www.brentaskyrace.it/wildrace.html"
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Wildrace
              </a>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <a
                href="https://www.brentaskyrace.it/video-della-gara.html"
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Video della gara
              </a>
            </ParagraphText>
          </li>
        </ul>
      );
    } else if (year === "2019") {
      content = (
        <ul>
          <li>
            <ParagraphText>
              <a
                href="https://www.brentaskyrace.it/foto-della-gara-2.html"
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Foto della gara
              </a>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <a
                href="https://www.brentaskyrace.it/video-della-gara-1.html"
                className={classes.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Video della gara
              </a>
            </ParagraphText>
          </li>
        </ul>
      );
    } else {
      content = (
        <ParagraphText>
          <a
            href="https://www.facebook.com/brentasky/photos_albums"
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vai alla pagina Facebook con le foto della gara
          </a>
        </ParagraphText>
      );
    }

    return (
      <>
        <Heading title={year} subtitle="EDIZIONI" />
        <PageContainer>
          <PageSection>
            <ParagraphText>
              Puoi visualizzare le foto delle edizioni passate a questi link:
            </ParagraphText>
            {content}
          </PageSection>
        </PageContainer>
      </>
    );
  } else {
    return <ErrorPage />;
  }
};

export default EditionDetailsPage;
