import { Menu, Group, Center, Burger, Stack, Portal, em } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { mainNavPaths } from "../../utils/paths";

const MainNavigation = () => {
  const [portalOpened, { toggle: togglePortal }] = useDisclosure(false);

  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  const closePortalHandler = () => {
    if (isMobile) {
      togglePortal();
    }
  };

  const navItems = mainNavPaths.map((navItem) => {
    // check if sub-items
    if (navItem.links) {
      const navSubItems = navItem.links?.map((subItem) => (
        <Menu.Item key={subItem.link}>
          <NavLink
            to={subItem.link}
            className={classes.link}
            end
            onClick={closePortalHandler}
          >
            <span className={classes.linkLabel}>{subItem.label}</span>
          </NavLink>
        </Menu.Item>
      ));

      return (
        <Menu
          key={navItem.label}
          trigger="click"
          transitionProps={{ exitDuration: 0 }}
          withinPortal={false}
        >
          <Menu.Target className={`${classes.link} ${classes.primaryLink}`}>
            <Center>
              <span className={classes.linkLabel}>{navItem.label}</span>
              <IconChevronDown size="0.9rem" stroke={1.5} />
            </Center>
          </Menu.Target>
          <Menu.Dropdown className={classes.dropdown}>
            {navSubItems}
          </Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <NavLink
        key={navItem.label}
        to={navItem.link}
        className={`${classes.link} ${classes.primaryLink}`}
        end
        onClick={closePortalHandler}
      >
        <span className={classes.linkLabel}>{navItem.label}</span>
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
        {navItems}
      </Group>
      {portalOpened && (
        <Portal>
          <div className={classes.navMobile}>
            <Stack justify="center" align="center">
              {navItems}
            </Stack>
          </div>
        </Portal>
      )}
      <Burger
        opened={portalOpened}
        onClick={togglePortal}
        size="sm"
        hiddenFrom="sm"
        aria-label="Toggle navigation"
        style={{ zIndex: 1 }}
      />
    </nav>
  );
};

export default MainNavigation;
