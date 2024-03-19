import { ComponentChildren } from "preact";
import { useRef } from "preact/hooks";
import useKeyHandler from "../../hooks/useKeyHandler";
import useOutsideClick from "../../hooks/useOutsideClick";
import style from "./style.module.scss";

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

  return (
    <>
      <div ref={ref} className={style.modal}>
        <button onClick={handleClose}>Close</button>
        {props.children}
      </div>
    </>
  );
};

export default Modal;
