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
  const onClick = () => {
    chrome.storage.sync.set({ key: "some value" }).then(() => {
      console.log("Value is set");

      chrome.storage.sync.get(["key"]).then((result) => {
        console.log(`Value is ${result.key}`);
      });
    });

    console.log("clicked");
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
