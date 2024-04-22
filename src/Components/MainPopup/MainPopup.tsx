import { useState } from 'preact/hooks';
import styled from 'styled-components';
import { List } from './List';
import EditNotePopup from '../EditNotePopup/EditNotePopup';
import { Button } from '../Shared';

const MainPopup = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <StyledMainPopup>
        <List />
        <StyledMainPopupAddButtonContainer>
          <Button onClick={() => setIsEditing(true)}>Add</Button>
        </StyledMainPopupAddButtonContainer>
      </StyledMainPopup>
      {isEditing && <EditNotePopup onClose={() => setIsEditing(false)} />}
    </>
  );
};

export default MainPopup;

const StyledMainPopup = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const StyledMainPopupAddButtonContainer = styled.div`
  margin-top: 8px;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;

  button {
    min-width: 56px;
  }
`;
