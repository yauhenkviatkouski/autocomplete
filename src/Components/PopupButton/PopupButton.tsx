import IconButton from '@mui/material/IconButton';
import { MainPopup } from '../MainPopup';
import { Modal } from '../Modal';
import styled from 'styled-components';
import InputIcon from '../Icons/InputIcon';
import { useGetGlobalContext } from '../../services/GlobalContext';

const PopupButton = () => {
  const { isPopupVisible, setIsPopupVisible } = useGetGlobalContext();
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
        aria-label="Add text"
        onClick={() => setIsPopupVisible(true)}
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

const StyledButton = styled(IconButton)<{ isTransparent: boolean }>`
  opacity: ${({ isTransparent }) => (isTransparent ? '0.4' : 1)};
`;
