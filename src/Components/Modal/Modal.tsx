import { ComponentChildren } from 'preact';
import { createPortal } from 'preact/compat';
import { useRef } from 'preact/hooks';
import useKeyHandler from '../../hooks/useKeyHandler';

import style from './Modal.module.scss';
import { Button } from '../Shared';
import CloseIcon from '../Icons/CloseIcon';
import { useGlobalContext } from '../../services/GlobalContext';

type ModalProps = {
  onClose: () => void;
  children: ComponentChildren;
};

const Modal = (props: ModalProps) => {
  const { appContainerRef } = useGlobalContext();
  const ref = useRef<HTMLDivElement>(null);

  useKeyHandler('Escape', props.onClose);

  if (!appContainerRef?.current) {
    return null;
  }

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
    appContainerRef.current
  );
};

export default Modal;
