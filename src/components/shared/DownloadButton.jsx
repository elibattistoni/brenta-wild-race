import { Link } from "react-router-dom";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

const DownloadButton = ({
  button,
  buttonText,
  fileName,
  linkToFile,
  style,
}) => {
  const isDev = import.meta.env.DEV;

  const urlPrefix = isDev
    ? "http://localhost:5173/"
    : "https://brentawildrace.it/";

  return (
    <Link
      to={`${urlPrefix}${linkToFile}`}
      download={fileName}
      target="_blank"
      rel="noreferrer"
    >
      {button === "primary" ? (
        <ButtonPrimary text={buttonText} style={style} />
      ) : (
        <ButtonSecondary text={buttonText} style={style} />
      )}
    </Link>
  );
};

export default DownloadButton;
