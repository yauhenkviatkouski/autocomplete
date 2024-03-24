import { listFixture } from "../../../fixtures/listFixture";
import { Item } from "./Item";
import { useDragAndDrop } from "../../../hooks/useDragAndDrop";

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
    <div>
      List with items
      <ul>
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
    </div>
  );
};

export default List;
