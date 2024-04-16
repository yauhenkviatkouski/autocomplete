import { ComponentChildren } from 'preact';
import { createPortal } from 'preact/compat';
import { useRef } from 'preact/hooks';
import IconButton from '@mui/material/IconButton';
import useKeyHandler from '../../hooks/useKeyHandler';

import CloseIcon from '../Icons/CloseIcon';
import { useGetGlobalContext } from '../../services/GlobalContext';
import styled from 'styled-components';

type ModalProps = {
  onClose: () => void;
  children: ComponentChildren;
};

const Modal = (props: ModalProps) => {
  const { appContainerRef } = useGetGlobalContext();
  const ref = useRef<HTMLDivElement>(null);

  useKeyHandler('Escape', props.onClose);

  if (!appContainerRef?.current) {
    return null;
  }

  return createPortal(
    <>
      {/* <FullScreenContainer onClick={props.onClose}></FullScreenContainer> */}
      <ModalContainer ref={ref}>
        <ModalHeader>
          <IconButton color="error" onClick={props.onClose}>
            <CloseIcon />
          </IconButton>
        </ModalHeader>
        {props.children}
      </ModalContainer>
    </>,
    appContainerRef.current
  );
};

export default Modal;

// const FullScreenContainer = styled.div`
//   position: fixed;
//   width: 100vw;
//   height: 100vh;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
// `;

const ModalContainer = styled.div`
  position: absolute;
  bottom: 56px;
  background-color: rgb(223 223 223);
  padding: 8px;
  box-shadow: rgba(66, 68, 90, 0.35) 5px 7px 20px 0px;
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
