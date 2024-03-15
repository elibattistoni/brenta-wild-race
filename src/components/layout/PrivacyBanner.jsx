import { Text } from "@mantine/core";
import ReactDOM from "react-dom";
import { CloseButton } from "@mantine/core";
import classes from "./PrivacyBanner.module.css";
import HighlightedText from "../shared/HighlightedText";
import { IconX } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { paths } from "../../utils/paths";
import { useCookies } from "react-cookie";

const overlayElement = document.getElementById("overlays");

const Overlay = () => {
  const [cookies, setCookies] = useCookies(["cookieConsent"]);

  const handleClickBanner = () => {
    setCookies("cookieConsent", true, { path: "/" });
  };

  if (cookies.cookieConsent) {
    return null;
  } else {
    return (
      <div className={classes.modal}>
        <div className={classes.modalInner}>
          <Text c="dimmed" size="xs">
            Questo sito utilizza cookie di terze parti per statistica e social
            network. Per saperne di più leggi la{" "}
            <NavLink to={paths.privacy.link} className={classes.link}>
              <HighlightedText text="Privacy Policy" />
            </NavLink>
            . Proseguendo nella navigazione presti il consenso all'uso di tutti
            i cookie.
          </Text>
          <CloseButton
            onClick={handleClickBanner}
            icon={
              <IconX
                size={16}
                stroke={1.5}
                color="var(--mantine-color-bluePrimary-0)"
              />
            }
            aria-label="Close banner"
          />
        </div>
      </div>
    );
  }
};

const PrivacyBanner = () => {
  return <>{ReactDOM.createPortal(<Overlay />, overlayElement)}</>;
};

export default PrivacyBanner;
