import { Button } from "@mantine/core";
import classes from "./ButtonSecondary.module.css";

const ButtonSecondary = ({ text, style }) => {
  return (
    <button className={classes.button} style={style}>
      {text}
    </button>
  );
};

export default ButtonSecondary;
