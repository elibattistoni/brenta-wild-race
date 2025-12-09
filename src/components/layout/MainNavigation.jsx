import {
  Menu,
  Group,
  Center,
  Burger,
  Stack,
  Portal,
  em,
  rem,
  Text,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { mainNavPaths, paths } from "../../utils/paths";
import BrentaWRLogo from "../../assets/logo-brenta-wild-race.svg?react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

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
            <Text mr={rem(5)} size="md">
              {subItem.label}
            </Text>
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
              <Text mr={rem(5)} size="md">
                {navItem.label}
              </Text>
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
        <Text mr={rem(5)} size="md">
          {navItem.label}
        </Text>
      </NavLink>
    );
  });

  return (
    <nav className={classes.nav}>
      <NavLink
        to={paths.home.link}
        style={{
          paddingTop: rem(8),
          display: "flex",
          alignItems: "center",
          gap: rem(16),
          paddingLeft: rem(40),
        }}
      >
        <BrentaWRLogo className={classes.logo} />
        <div style={{ width: "50px" }}>
          <LazyLoadImage
            alt="Mappa 3D"
            effect="opacity"
            placeholderSrc="/logo-val-di-non.png"
            src="/logo-val-di-non.png"
            wrapperProps={{
              style: { transitionDuration: "2s" },
            }}
            width="100%"
          />
        </div>
      </NavLink>
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
