import { NavLink, useParams } from "react-router-dom";
import Heading from "../../components/shared/Heading";
import PageContainer from "../../components/shared/PageContainer";
import ErrorPage from "../ErrorPage";
import ParagraphText from "../../components/shared/ParagraphText";
import PageSection from "../../components/shared/PageSection";
import classes from "./EditionsHomePage.module.css";
import { Stack } from "@mantine/core";

const EditionDetailsPage = () => {
  const { year } = useParams();

  if (year === "2017" || year === "2018" || year === "2019") {
    let content;

    if (year === "2017") {
      content = (
        <ul>
          <li>
            <ParagraphText>
              <NavLink
                to="http://www.brentaskyrace.it/partenza-e-arrivi.html"
                className={classes.link}
                target="_blank"
              >
                Foto delle partenze e arrivi
              </NavLink>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <NavLink
                to="http://www.brentaskyrace.it/foto-della-gara.html"
                className={classes.link}
                target="_blank"
              >
                Foto della gara
              </NavLink>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <NavLink
                to="http://www.brentaskyrace.it/foto-del-territorio.html"
                className={classes.link}
                target="_blank"
              >
                Foto del territorio
              </NavLink>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <NavLink
                to="http://www.brentaskyrace.it/video-del-percorso.html"
                className={classes.link}
                target="_blank"
              >
                Video del percorso
              </NavLink>
            </ParagraphText>
          </li>
        </ul>
      );
    } else if (year === "2018") {
      content = (
        <ul>
          <li>
            <ParagraphText>
              <NavLink
                to="http://www.brentaskyrace.it/partenza-e-arrivi-1.html"
                className={classes.link}
                target="_blank"
              >
                Foto delle partenze e arrivi
              </NavLink>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <NavLink
                to="http://www.brentaskyrace.it/foto-della-gara-1.html"
                className={classes.link}
                target="_blank"
              >
                Foto della gara
              </NavLink>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <NavLink
                to="http://www.brentaskyrace.it/wildrace.html"
                className={classes.link}
                target="_blank"
              >
                Wildrace
              </NavLink>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <NavLink
                to="http://www.brentaskyrace.it/video-della-gara.html"
                className={classes.link}
                target="_blank"
              >
                Video della gara
              </NavLink>
            </ParagraphText>
          </li>
        </ul>
      );
    } else if (year === "2019") {
      content = (
        <ul>
          <li>
            <ParagraphText>
              <NavLink
                to="http://www.brentaskyrace.it/foto-della-gara-2.html"
                className={classes.link}
                target="_blank"
              >
                Foto della gara
              </NavLink>
            </ParagraphText>
          </li>
          <li>
            <ParagraphText>
              <NavLink
                to="http://www.brentaskyrace.it/video-della-gara-1.html"
                className={classes.link}
                target="_blank"
              >
                Video della gara
              </NavLink>
            </ParagraphText>
          </li>
        </ul>
      );
    }

    return (
      <>
        <Heading title={year} subtitle="EDIZIONI" />
        <PageContainer>
          <PageSection>
            <ParagraphText>Pagina in costruzione. Stay Tuned!</ParagraphText>
          </PageSection>
          <PageSection>
            <ParagraphText>
              Nel frattempo puoi visualizzare le foto delle edizioni passate a
              questi link:
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
