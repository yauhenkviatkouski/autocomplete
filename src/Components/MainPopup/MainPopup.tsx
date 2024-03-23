import { List } from "./List";
import style from "./style.module.scss";

const MainPopup = () => {
  return (
    <main className={style["main-popup"]}>
      <List />
    </main>
  );
};

export default MainPopup;
