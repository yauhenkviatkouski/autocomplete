import { Item } from "../Item";

const List = () => {
  return (
    <>
      List with items
      {[1, 2, 3].map((item) => (
        <Item key={item} />
      ))}
    </>
  );
};

export default List;
