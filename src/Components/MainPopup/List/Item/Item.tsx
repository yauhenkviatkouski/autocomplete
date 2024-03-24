import classNames from "classnames";
import style from "./style.module.scss";

type ItemProps = {
  title: string;
  value: string;
  position: number;
  isDragging: boolean;
};

const Item = (props: ItemProps) => {
  return (
    <div
      className={classNames(style.item, {
        [style.item_dragging]: props.isDragging,
      })}
    >
      <div>{props.position}</div>
      <div className={style.item__title}>{props.title}</div>
    </div>
  );
};

export default Item;
