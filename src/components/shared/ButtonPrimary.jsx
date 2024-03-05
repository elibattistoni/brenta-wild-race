import { Button } from "@mantine/core";
import classes from "./ButtonPrimary.module.css";

const ButtonPrimary = ({ text, style }) => {
  return (
    <Button className={classes.button} style={style}>
      {text}
    </Button>
  );
};

export default ButtonPrimary;
