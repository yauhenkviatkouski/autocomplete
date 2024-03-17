import { useState } from 'preact/hooks';
import { MainPopup } from '../MainPopup';
import style from './style.module.scss';

const PopupButton = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <div className={style['popup-button']}>
      {isPopupVisible && <MainPopup />}
      <button onClick={() => setIsPopupVisible(true)}>PB</button>
    </div>
  );
};

export default PopupButton;
