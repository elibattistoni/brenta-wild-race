import { Menu, Group, Center, Burger, Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const links = [
  { link: "/", label: "Home" },
  {
    link: "/gara",
    label: "Gara",
    links: [
      { link: "/gara/percorso-varianti", label: "Percorso e Varianti" },
      { link: "/gara/programma", label: "Programma" },
      { link: "/gara/regolamento", label: "Regolamento" },
      { link: "/gara/montepremi", label: "Montepremi" },
      { link: "/gara/iscrizione", label: "Iscrizione" },
    ],
  },
  { link: "/edizioni", label: "Edizioni" },
  { link: "/sponsor", label: "Sponsor" },
  { link: "/contatti", label: "Contatti" },
];

const MainNavigation = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <NavLink to={item.link} className={classes.link} end>
          <span className={link.linkLabel}>{item.label}</span>
        </NavLink>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <NavLink to={link.link} className={classes.link} end>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </NavLink>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <NavLink key={link.label} to={link.link} className={classes.link} end>
        <span className={classes.linkLabel}>{link.label}</span>
      </NavLink>
    );
  });

  return (
    <nav className={classes.nav}>
      <Group
        gap={5}
        justify="flex-end"
        style={{ width: "100%" }}
        visibleFrom="sm"
      >
        {items}
      </Group>
      <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
    </nav>
  );
};

export default MainNavigation;
