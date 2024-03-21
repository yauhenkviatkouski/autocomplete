import { useState } from "preact/hooks";
import { POPUP_BUTTON_CONTAINER_ID } from "../../variables";
import { PlusIcon } from "../Icons";
import { MainPopup } from "../MainPopup";
import { Modal } from "../Modal";
import { Button } from "../Shared";
import style from "./style.module.scss";
import classNames from "classnames";

const PopupButton = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <div
      id={POPUP_BUTTON_CONTAINER_ID}
      className={classNames(style["popup-button-container"], {
        [style["popup-button-container_visible"]]: isPopupVisible,
      })}
    >
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
