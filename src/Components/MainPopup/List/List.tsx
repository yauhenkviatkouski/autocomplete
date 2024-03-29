import { listFixture } from "../../../fixtures/listFixture";
import { Item } from "./Item";
import { Item as ItemType } from "../../../types";
import { useDragAndDrop } from "../../../hooks/useDragAndDrop";

import style from "./style.module.scss";
import { useContext, useEffect, useMemo, useState } from "preact/hooks";
import { StorageContext } from "../../StorageContext";

const List = () => {
  const storage = useContext(StorageContext);
  const [items, setItems] = useState<ItemType[]>([]);
  const sortedList = useMemo(
    () => items.sort((a, b) => a.position - b.position),
    [items]
  );

  useEffect(() => {
    storage?.getItems().then((items) => setItems(items));
  }, [storage]);

  const onChangeItems = (items: ItemType[]) => {
    storage.setItems(items).then(() => {
      console.log("Items are set");
    });
  };

  const { handleDragOver, handleDragStart, handleDrop, draggedItemIndex } =
    useDragAndDrop({
      initialItems: sortedList,
      onDrop: onChangeItems,
    });

  return (
    <ul className={style.list}>
      {items.map((item, index) => (
        <li
          key={item.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={handleDrop}
        >
          <Item
            title={item.title}
            value={item.value}
            position={item.position}
            isDragging={index === draggedItemIndex}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
