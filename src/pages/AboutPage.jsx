import { Flex, Stack, Text, rem } from "@mantine/core";
import Heading from "../components/shared/Heading";
import PageContainer from "../components/shared/PageContainer";
import PageSection from "../components/shared/PageSection";
import ParagraphText from "../components/shared/ParagraphText";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";
import PageSectionTitle from "../components/shared/PageSectionTitle";
import { NavLink } from "react-router-dom";
import classes from "./AboutPage.module.css";

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
            <span className="highlight">Gruppo Sportivo K40</span> - via
            Pontevecchio, 38010 Campodenno (TN)
          </ParagraphText>
          <Stack gap={rem(4)}>
            <Text>Presidente: Antonio - 338 5205357</Text>
            <Text>Info percorso: Narciso - 328 2668759</Text>
            <Text>Info iscrizioni: Danilo - 335 1240212</Text>
          </Stack>
          <ParagraphText>
            email: <span className="highlight">info@brentawildrace.it</span>
          </ParagraphText>
          <Flex gap={rem(24)}>
            <Stack gap={rem(1)} align="center">
              <IconBrandInstagram style={iconStyle} />
              <Text size="xs">Instagram</Text>
            </Stack>
            <Stack gap={rem(1)} align="center">
              <IconBrandFacebook style={iconStyle} />
              <Text size="xs">Facebook</Text>
            </Stack>
          </Flex>
        </PageSection>
        <PageSection>
          <PageSectionTitle text="DOVE ALLOGGIARE" />
          <ul style={{ margin: "0px" }}>
            <li>
              <ParagraphText>
                <NavLink
                  to="https://www.trifogliovaldinon.com/"
                  className={classes.link}
                >
                  <span className="highlight">B&B Al Trifoglio</span>
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
                  <span className="highlight">Agrihouse</span>
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
                  <span className="highlight">B&B Casa del sole</span>
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
                  <span className="highlight">B&B Casa delle Fate</span>
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
                  <span className="highlight">Agritur Golden Pause</span>
                </NavLink>
                - Toss di Ton
              </ParagraphText>
            </li>
          </ul>
        </PageSection>
      </PageContainer>
    </>
  );
};

export default AboutPage;
