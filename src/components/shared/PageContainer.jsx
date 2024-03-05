import { Container } from "@mantine/core";
import classes from "./PageContainer.module.css";

const PageContainer = (props) => {
  return (
    <Container fluid className={classes.container}>
      {props.children}
    </Container>
  );
};

export default PageContainer;
