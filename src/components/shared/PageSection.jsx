import classes from "./PageSection.module.css";

const PageSection = ({ children }) => {
  return <section className={classes.section}>{children}</section>;
};

export default PageSection;
