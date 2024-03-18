import classNames from "classnames";
import { FC, HTMLAttributes } from "preact/compat";
import style from "./style.module.scss";

const Button: FC<HTMLAttributes<HTMLButtonElement>> & { type?: "icon" } = (
  props
) => (
  <button
    class={classNames(style.button, {
      [style.button_icon]: props.type === "icon",
    })}
    {...props}
  ></button>
);

export default Button;
