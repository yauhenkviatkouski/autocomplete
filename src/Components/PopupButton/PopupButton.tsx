import { useState } from "preact/hooks";
import { PlusIcon } from "../Icons";
import { MainPopup } from "../MainPopup";
import { Modal } from "../Modal";
import { Button } from "../Shared";
import style from "./style.module.scss";

const PopupButton = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <div className={style["popup-button-container"]}>
      {isPopupVisible && (
        <Modal onClose={() => setIsPopupVisible(false)}>
          <MainPopup />
        </Modal>
      )}
      <Button
        type="icon"
        aria-label="Add text"
        onClick={() => setIsPopupVisible(true)}
      >
        <PlusIcon />
      </Button>
    </div>
  );
};

export default PopupButton;
