import { MainPopup } from '../MainPopup';
import { Modal } from '../Modal';
import styled from 'styled-components';
import InputIcon from '../Icons/InputIcon';
import { useGetGlobalContext } from '../../services/GlobalContext';
import { useHotKeysController } from '../../hooks/useHotKeysController';
import { Button } from '../Shared';

const PopupButton = () => {
  const { isPopupVisible, setIsPopupVisible } = useGetGlobalContext();
  useHotKeysController();
  return (
    <StyledContainer>
      {isPopupVisible && (
        <Modal onClose={() => setIsPopupVisible(false)}>
          <MainPopup />
        </Modal>
      )}
      <StyledButton
        isTransparent={!isPopupVisible}
        color="success"
        isIcon
        aria-label="Add text"
        onClick={() => setIsPopupVisible((prevState) => !prevState)}
      >
        <InputIcon />
      </StyledButton>
    </StyledContainer>
  );
};

export default PopupButton;

const StyledContainer = styled.div`
  position: absolute;
  bottom: 16px;
`;

const StyledButton = styled(Button)<{ isTransparent: boolean }>`
  opacity: ${({ isTransparent }) => (isTransparent ? '0.4' : 1)};
`;
