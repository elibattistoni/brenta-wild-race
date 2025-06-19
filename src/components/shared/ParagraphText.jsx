import { Text } from "@mantine/core";
import classes from "./ParagraphText.module.css";

const ParagraphText = ({ children, ...props }) => {
  return (
    <Text
      fz={{ base: "md", sm: "lg" }}
      className={classes.paragraph}
      {...props}
    >
      {children}
    </Text>
  );
};

export default ParagraphText;
