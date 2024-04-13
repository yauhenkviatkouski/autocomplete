import { ComponentChildren } from 'preact';
import { createPortal } from 'preact/compat';
import { useRef } from 'preact/hooks';
import useKeyHandler from '../../hooks/useKeyHandler';

import { Button } from '../Shared';
import CloseIcon from '../Icons/CloseIcon';
import { useGlobalContext } from '../../services/GlobalContext';
import styled from 'styled-components';

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
      <FullScreenContainer onClick={props.onClose}></FullScreenContainer>
      <ModalContainer ref={ref}>
        <ModalHeader>
          <Button onClick={props.onClose}>
            <CloseIcon />
          </Button>
        </ModalHeader>
        {props.children}
      </ModalContainer>
    </>,
    appContainerRef.current
  );
};

export default Modal;

const FullScreenContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  /* background: rgba(48, 48, 48, 0.74); */
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const ModalContainer = styled.div`
  position: absolute;
  bottom: 56px;
  background-color: rgb(213, 221, 189);
  padding: 8px;
  border: 1px solid gray;
  border-radius: 4px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 8px;

  button {
    width: 24px;
    height: 24px;
  }
`;
