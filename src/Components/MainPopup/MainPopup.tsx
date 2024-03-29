import { useContext, useEffect, useState } from "preact/hooks";
import { Button } from "../Shared";
import { List } from "./List";
import style from "./style.module.scss";
import { ChromeStorageProvider } from "../ChromeStorageContext";

const MainPopup = () => {
  return (
    <ChromeStorageProvider>
      <main className={style.main_popup}>
        <List />
        <div className={style.main_popup__add_button_container}>
          <Button>Add</Button>
        </div>
      </main>
    </ChromeStorageProvider>
  );
};

export default MainPopup;
