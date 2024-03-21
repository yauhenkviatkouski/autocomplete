import classNames from "classnames";
import { FC, HTMLAttributes } from "preact/compat";
import style from "./style.module.scss";

const Button: FC<HTMLAttributes<HTMLButtonElement>> & { type?: "icon" } = (
  props
) => (
  <button
    {...props}
    className={classNames(
      style.button,
      {
        [style.button_icon]: props.type === "icon",
      },
      props.className
    )}
  />
);

export default Button;
