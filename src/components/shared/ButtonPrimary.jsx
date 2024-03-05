import classes from "./ButtonPrimary.module.css";

const ButtonPrimary = ({ text, style }) => {
  return (
    <button className={classes.button} style={style}>
      {text}
    </button>
  );
};

export default ButtonPrimary;
