import { Text, Container, ActionIcon, Group } from "@mantine/core";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";
import classes from "./Footer.module.css";
import { footerPaths, socialLinks } from "../../utils/paths";
import { NavLink } from "react-router-dom";
import BrentaWRLogo from "../../assets/logo-brenta-wild-race.svg?react";

const Footer = () => {
  const footerLinks = footerPaths.map((group) => {
    const links = group.links.map((link, idx) => {
      return (
        <NavLink key={idx} to={link.link} className={classes.link}>
          {link.title}
        </NavLink>
      );
    });

    return (
      <div className={classes.wrapper} key={group.title}>
        <span className={classes.title}>{group.title}</span>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <BrentaWRLogo className={classes.logo} />
        {footerLinks}
      </Container>
      <Container className={classes.afterFooter}>
        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon
            size="lg"
            color="var(--mantine-color-orangeBrenta-0)"
            variant="subtle"
            component="a"
            href={socialLinks.facebook}
            aria-label="Open Facebook Page"
            target="_blank"
          >
            <IconBrandFacebook className={classes.icons} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="var(--mantine-color-orangeBrenta-0)"
            variant="subtle"
            component="a"
            href={socialLinks.instagram}
            aria-label="Open Instagram Page"
            target="_blank"
          >
            <IconBrandInstagram className={classes.icons} stroke={1.5} />
          </ActionIcon>
        </Group>

        <Text c="dimmed" size="xs">
          © 2024 - www.brentawildrace.it - Associazione Sportiva K40 - 38010 -
          Campodenno (TN) - Tutti i diritti riservati
        </Text>
        <Text c="dimmed" size="xs" className={classes.linkCreditsContainer}>
          Powered by{" "}
          <NavLink
            target="_blank"
            to="https://elibattistoni.github.io/develysverse/"
            className={classes.linkCredits}
          >
            Elisa Battistoni
          </NavLink>
        </Text>
      </Container>
    </footer>
  );
};

export default Footer;
