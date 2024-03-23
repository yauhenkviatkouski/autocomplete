import { listFixture } from "../../../fixtures/listFixture";
import { Item } from "./Item";

const List = () => {
  const sortedList = listFixture.sort((a, b) => a.position - b.position);

  return (
    <div>
      List with items
      <ul>
        {sortedList.map((item) => (
          <Item
            key={item.id}
            title={item.title}
            value={item.value}
            position={item.position}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
