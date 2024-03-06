import { Text } from "@mantine/core";

const ParagraphText = ({ children }) => {
  return <Text fz={{ base: "md", sm: "lg" }}>{children}</Text>;
};

export default ParagraphText;
