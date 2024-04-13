import { useState } from 'preact/hooks';
import { PlusIcon } from '../Icons';
import { MainPopup } from '../MainPopup';
import { Modal } from '../Modal';
import { Button } from '../Shared';
import styled from 'styled-components';

const PopupButton = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  return (
    <StyledContainer>
      {isPopupVisible && (
        <Modal onClose={() => setIsPopupVisible(false)}>
          <MainPopup />
        </Modal>
      )}
      <Button type="icon" aria-label="Add text" onClick={() => setIsPopupVisible(true)}>
        <PlusIcon />
      </Button>
    </StyledContainer>
  );
};

export default PopupButton;

const StyledContainer = styled.div`
  position: absolute;
  bottom: baseSize(4);

  > button {
    opacity: 20%;
  }

  &_visible {
    > button {
      opacity: 1;
    }
  }
`;
