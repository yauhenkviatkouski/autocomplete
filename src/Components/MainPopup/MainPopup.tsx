import { Header } from "../Header";
import { List } from "../List";

import style from "./style.module.scss";

const MainPopup = () => {
  return (
    <main className={style["main-popup"]}>
      <Header />
      <List />
    </main>
  );
};

export default MainPopup;
