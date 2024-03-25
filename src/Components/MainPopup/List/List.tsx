import { listFixture } from "../../../fixtures/listFixture";
import { Item } from "./Item";
import { useDragAndDrop } from "../../../hooks/useDragAndDrop";

import style from "./style.module.scss";

const List = () => {
  const sortedList = listFixture.sort((a, b) => a.position - b.position);
  const {
    handleDragOver,
    handleDragStart,
    handleDrop,
    items,
    draggedItemIndex,
  } = useDragAndDrop({
    initialItems: sortedList,
    onDrop: (items) => console.log("dropped items", items),
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
