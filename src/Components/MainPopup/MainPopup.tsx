import { Button } from "../Shared";
import { List } from "./List";
import style from "./style.module.scss";

const MainPopup = () => {
  return (
    <main className={style.main_popup}>
      <List />
      <div className={style.main_popup__add_button_container}>
        <Button>Add</Button>
      </div>
    </main>
  );
};

export default MainPopup;
