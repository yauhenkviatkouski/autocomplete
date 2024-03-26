import classNames from "classnames";
import style from "./style.module.scss";
import { Button } from "../../../Shared";
import EditIcon from "../../../Icons/EditIcon";
import TrashIcon from "../../../Icons/TrashIcon";

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
      <button className={style.item__title}>{props.title}</button>
      <Button type="icon">
        <EditIcon />
      </Button>
      <Button type="icon">
        <TrashIcon />
      </Button>
    </div>
  );
};

export default Item;
