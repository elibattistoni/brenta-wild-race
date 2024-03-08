import { Text } from "@mantine/core";
import classes from "./ParagraphText.module.css";

const ParagraphText = ({ children }) => {
  return (
    <Text fz={{ base: "md", sm: "lg" }} className={classes.paragraph}>
      {children}
    </Text>
  );
};

export default ParagraphText;
