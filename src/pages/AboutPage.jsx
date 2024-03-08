import { ActionIcon, Flex, Stack, Text, rem } from "@mantine/core";
import Heading from "../components/shared/Heading";
import PageContainer from "../components/shared/PageContainer";
import PageSection from "../components/shared/PageSection";
import ParagraphText from "../components/shared/ParagraphText";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";
import PageSectionTitle from "../components/shared/PageSectionTitle";
import { NavLink } from "react-router-dom";
import classes from "./AboutPage.module.css";
import HighlightedText from "../components/shared/HighlightedText";
import { socialLinks } from "../utils/paths";

const iconStyle = {
  width: rem(64),
  height: rem(64),
  strokeWidth: 1,
  color: "var(--mantine-color-orangeBrenta-0)",
};

const AboutPage = () => {
  return (
    <>
      <Heading title="CHI SIAMO" subtitle="CONTATTI" />
      <PageContainer>
        <PageSection>
          <ParagraphText>
            <HighlightedText text="Gruppo Sportivo K40" /> - via Pontevecchio,
            38010 Campodenno (TN)
          </ParagraphText>
          <Stack gap={rem(4)}>
            <ParagraphText>Presidente: Antonio - 338 5205357</ParagraphText>
            <ParagraphText>Info percorso: Narciso - 328 2668759</ParagraphText>
            <ParagraphText>Info iscrizioni: Danilo - 335 1240212</ParagraphText>
          </Stack>
          <ParagraphText>
            email: <HighlightedText text="info@brentawildrace.it" />
          </ParagraphText>
          <Flex gap={rem(24)}>
            <NavLink
              to={socialLinks.instagram}
              target="_blank"
              className={classes.iconLink}
            >
              <IconBrandInstagram style={iconStyle} />
              <Text size="xs">Instagram</Text>
            </NavLink>
            <NavLink
              to={socialLinks.instagram}
              target="_blank"
              className={classes.iconLink}
            >
              <IconBrandFacebook style={iconStyle} />
              <Text size="xs">Facebook</Text>
            </NavLink>
          </Flex>
        </PageSection>
        <PageSection>
          <Stack gap="lg">
            <PageSectionTitle text="DOVE ALLOGGIARE" />
            <ul style={{ margin: "0px" }}>
              <li>
                <ParagraphText>
                  <NavLink
                    to="https://www.trifogliovaldinon.com/"
                    className={classes.link}
                  >
                    <HighlightedText text="B&B Al Trifoglio" />
                  </NavLink>{" "}
                  - Lover di Campodenno
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  <NavLink
                    to="https://www.airbnb.it/rooms/4636190?source_impression_id=p3_1709671572_gB%2BPVW68fdxsCn5k"
                    className={classes.link}
                  >
                    <HighlightedText text="Agrihouse" />
                  </NavLink>
                  - Dercolo di Campodenno
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  <NavLink
                    to="https://www.beblacasadelsoletrentino.com/"
                    className={classes.link}
                  >
                    <HighlightedText text="B&B Casa del sole" />
                  </NavLink>{" "}
                  - Campodenno
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  <NavLink
                    to="http://www.casadellefate.it/"
                    className={classes.link}
                  >
                    <HighlightedText text="B&B Casa delle Fate" />
                  </NavLink>
                  - Termon di Campodenno
                </ParagraphText>
              </li>
              <li>
                <ParagraphText>
                  <NavLink
                    to="https://www.goldenpause.it/"
                    className={classes.link}
                  >
                    <HighlightedText text="Agritur Golden Pause" />
                  </NavLink>
                  - Toss di Ton
                </ParagraphText>
              </li>
            </ul>
          </Stack>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default AboutPage;
