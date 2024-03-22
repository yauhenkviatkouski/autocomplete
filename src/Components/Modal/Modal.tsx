import { ComponentChildren } from "preact";
import { createPortal } from "preact/compat";
import { useRef } from "preact/hooks";
import useKeyHandler from "../../hooks/useKeyHandler";
import useOutsideClick from "../../hooks/useOutsideClick";
import { POPUP_BUTTON_CONTAINER_ID } from "../../variables";

import style from "./style.module.scss";
import { Button } from "../Shared";
import CloseIcon from "../Icons/CloseIcon";

type ModalProps = {
  onClose: () => void;
  children: ComponentChildren;
};

const Modal = (props: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClose = (): void => {
    props.onClose();
  };

  useOutsideClick(ref, handleClose);
  useKeyHandler("Escape", handleClose);

  return createPortal(
    <div ref={ref} className={style.modal}>
      <div className={style.modal__header}>
        <Button onClick={handleClose}>
          <CloseIcon />
        </Button>
      </div>
      {props.children}
    </div>,
    document.getElementById(POPUP_BUTTON_CONTAINER_ID)
  );
};

export default Modal;
