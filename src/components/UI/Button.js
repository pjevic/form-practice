import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={classes.button} type={props.type || "button"} onclick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
