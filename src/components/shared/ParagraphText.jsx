import { Text } from "@mantine/core";

const ParagraphText = ({ children }) => {
  return <Text fz={{ base: "md", xs: "lg" }}>{children}</Text>;
};

export default ParagraphText;
