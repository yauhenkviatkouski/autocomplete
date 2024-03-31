import { Item } from "./Item";
import { useDragAndDrop } from "../../../hooks/useDragAndDrop";

import style from "./style.module.scss";
import { useMemo } from "preact/hooks";
import { useGetStorageContext } from "../../StorageContext";

const List = () => {
  const { items, storage } = useGetStorageContext();

  const sortedList = useMemo(
    () => items.sort((a, b) => a.position - b.position),
    [items]
  );

  const {
    handleDragOver,
    handleDragStart,
    handleDrop,
    draggedItemIndex,
    items: draggableItems,
  } = useDragAndDrop({
    initialItems: sortedList,
    onDrop: (items) => storage.setItems(items),
  });

  return (
    <ul className={style.list}>
      {draggableItems.map((item, index) => (
        <li
          key={item.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={handleDrop}
        >
          <Item
            id={item.id}
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
