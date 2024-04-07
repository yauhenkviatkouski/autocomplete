import { ComponentChildren } from 'preact';
import { createPortal } from 'preact/compat';
import { useRef } from 'preact/hooks';
import useKeyHandler from '../../hooks/useKeyHandler';
import { POPUP_BUTTON_CONTAINER_ID } from '../../variables';

import style from './Modal.module.scss';
import { Button } from '../Shared';
import CloseIcon from '../Icons/CloseIcon';
import { getElementBySelector } from '../../helpers';

type ModalProps = {
  onClose: () => void;
  children: ComponentChildren;
};

const Modal = (props: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useKeyHandler('Escape', props.onClose);

  return createPortal(
    <>
      <div onClick={props.onClose} className={style.full_screen_container}></div>
      <div ref={ref} className={style.modal}>
        <div className={style.modal__header}>
          <Button onClick={props.onClose}>
            <CloseIcon />
          </Button>
        </div>
        {props.children}
      </div>
    </>,
    getElementBySelector(`#${POPUP_BUTTON_CONTAINER_ID}`) as HTMLElement
  );
};

export default Modal;
