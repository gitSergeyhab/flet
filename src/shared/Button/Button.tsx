import { FC, HtmlHTMLAttributes } from "react";
import "./styles.css";

export const Button: FC<HtmlHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className="button" {...props}>
      {props.children}
    </button>
  );
};
