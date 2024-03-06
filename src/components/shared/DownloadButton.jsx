import { Link } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { rem } from "@mantine/core";

const DownloadButton = ({ button, buttonText, fileName, linkToFile }) => {
  return (
    <Link to={linkToFile} download={fileName} target="_blank" rel="noreferrer">
      {button === "primary" ? (
        <ButtonPrimary text={buttonText} style={{ marginTop: rem(24) }} />
      ) : (
        <ButtonSecondary text={buttonText} style={{ marginTop: rem(24) }} />
      )}
    </Link>
  );
};

export default DownloadButton;
