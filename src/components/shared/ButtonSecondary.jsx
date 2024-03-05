import { Button } from "@mantine/core";
import classes from "./ButtonSecondary.module.css";

const ButtonSecondary = ({ text, style }) => {
  return (
    <Button className={classes.button} style={style}>
      {text}
    </Button>
  );
};

export default ButtonSecondary;
