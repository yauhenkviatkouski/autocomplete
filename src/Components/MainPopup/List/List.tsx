import { listFixture } from "../../../fixtures/listFixture";
import { Item } from "./Item";
import { Item as ItemType } from "../../../types";
import { useDragAndDrop } from "../../../hooks/useDragAndDrop";

import style from "./style.module.scss";
import { useContext, useEffect, useMemo, useState } from "preact/hooks";
import { ChromeStorageContext } from "../../ChromeStorageContext";

const List = () => {
  const chromeStorage = useContext(ChromeStorageContext);
  const [items, setItems] = useState([]);
  const sortedList = useMemo(
    () => items.sort((a, b) => a.position - b.position),
    [items]
  );

  useEffect(() => {
    chromeStorage.getItems().then((items) => setItems(items));
  }, []);

  const onChangeItems = (items: ItemType[]) => {
    chromeStorage.setItems(items).then(() => {
      console.log("Items are set");
    });
  };

  const { handleDragOver, handleDragStart, handleDrop, draggedItemIndex } =
    useDragAndDrop({
      items: sortedList,
      onChangeItemsPosition: onChangeItems,
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
