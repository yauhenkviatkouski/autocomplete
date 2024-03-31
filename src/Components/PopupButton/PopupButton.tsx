import { useState } from 'preact/hooks';
import { PlusIcon } from '../Icons';
import { MainPopup } from '../MainPopup';
import { Modal } from '../Modal';
import { Button } from '../Shared';
import style from './style.module.scss';
import classNames from 'classnames';
import { StorageProvider } from '../StorageContext';

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
      </div>
    </StorageProvider>
  );
};

export default PopupButton;
