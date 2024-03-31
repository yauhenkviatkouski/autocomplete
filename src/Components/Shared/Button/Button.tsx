import classNames from 'classnames';
import { HTMLAttributes } from 'preact/compat';
import style from './style.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'icon';
}

const Button = (props: ButtonProps) => (
  <button
    {...props}
    className={classNames(
      style.button,
      {
        [style.button_icon]: props.type === 'icon',
      },
      props.className
    )}
  />
);

export default Button;
