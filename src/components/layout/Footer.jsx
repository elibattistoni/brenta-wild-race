import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";
import classes from "./Footer.module.css";
import { footerPaths } from "../../utils/paths";
import { NavLink } from "react-router-dom";
// import { ReactComponent as BrentaWRLogo } from "../../assets/brentawildracelogo.svg";
import BrentaWRLogo from "../../assets/brentawildracelogo.svg?react";

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
        <Text c="dimmed" size="sm">
          © 2024 - www.brentawildrace.it - Associazione Sportiva K40 - 38010 -
          Campodenno (TN) - Tutti i diritti riservati
        </Text>

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
          >
            <IconBrandFacebook
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="var(--mantine-color-orangeBrenta-0)"
            variant="subtle"
          >
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
