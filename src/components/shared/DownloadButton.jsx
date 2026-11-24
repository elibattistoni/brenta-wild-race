import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

// Files in public/ are served from the same site (dev, preview and live),
// so a same-origin link is enough, and the browser honours `download`.
const DownloadButton = ({
  button,
  buttonText,
  fileName,
  linkToFile,
  style,
}) => {
  const href = `${import.meta.env.BASE_URL}${linkToFile.replace(/^\//, "")}`;

  return (
    <a href={href} download={fileName}>
      {button === "primary" ? (
        <ButtonPrimary text={buttonText} style={style} />
      ) : (
        <ButtonSecondary text={buttonText} style={style} />
      )}
    </a>
  );
};

export default DownloadButton;
