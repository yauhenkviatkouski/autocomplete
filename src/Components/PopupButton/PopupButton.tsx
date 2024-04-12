import { useState } from 'preact/hooks';
import { PlusIcon } from '../Icons';
import { MainPopup } from '../MainPopup';
import { Modal } from '../Modal';
import { Button } from '../Shared';
import classNames from 'classnames';
import { StorageProvider } from '../StorageContext';
import style from './PopupButton.module.scss';
import styled from 'styled-components';
import MuiButton from '@mui/material/Button';

const PopupButton = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <StorageProvider>
      <div
        className={classNames(style['popup-button-container'], {
          [style['popup-button-container_visible']]: isPopupVisible,
        })}
      >
        {isPopupVisible && (
          <Modal onClose={() => setIsPopupVisible(false)}>
            <MainPopup />
          </Modal>
        )}
        <Button type="icon" aria-label="Add text" onClick={() => setIsPopupVisible(true)}>
          <PlusIcon />
        </Button>
        <StyledButton>asdas</StyledButton>
        <MuiButton>MUI</MuiButton>
      </div>
    </StorageProvider>
  );
};

export default PopupButton;

const StyledButton = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
  background-color: aquamarine;
`;
