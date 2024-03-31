import classNames from "classnames";
import style from "./style.module.scss";
import { Button } from "../../../Shared";
import EditIcon from "../../../Icons/EditIcon";
import TrashIcon from "../../../Icons/TrashIcon";
import { useState } from "preact/hooks";
import EditNotePopup from "../../../EditNotePopup/EditNotePopup";

type ItemProps = {
  id: string;
  title: string;
  value: string;
  position: number;
  isDragging: boolean;
};

const Item = (props: ItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const onClick = () => {
    console.log("clicked", props.title);
  };
  return (
    <div
      className={classNames(style.item, {
        [style.item_dragging]: props.isDragging,
      })}
    >
      <div>{props.position}</div>
      <button onClick={onClick} className={style.item__title}>
        {props.title}
      </button>
      <Button onClick={() => setIsEditing(true)} type="icon">
        <EditIcon />
      </Button>
      <Button type="icon">
        <TrashIcon />
      </Button>

      {isEditing && (
        <EditNotePopup
          id={props.id}
          title={props.title}
          note={props.value}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default Item;
