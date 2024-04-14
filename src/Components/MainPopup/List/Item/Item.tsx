import styled from 'styled-components';
import { useState } from 'preact/hooks';
import IconButton from '@mui/material/IconButton';
import EditIcon from '../../../Icons/EditIcon';
import TrashIcon from '../../../Icons/TrashIcon';
import EditNotePopup from '../../../EditNotePopup/EditNotePopup';
import { useGetStorageContext } from '../../../../services/StorageContext';
import { getTextAreaForPrompt } from '../../../../helpers';
import { useGetGlobalContext } from '../../../../services/GlobalContext';
import CopyIcon from '../../../Icons/CopyIcon';

type ItemProps = {
  id: string;
  title: string;
  value: string;
  position: number;
  isDragging: boolean;
};

const Item = (props: ItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { storage } = useGetStorageContext();
  const { setIsPopupVisible } = useGetGlobalContext();
  const [textArea] = useState(() => getTextAreaForPrompt() as HTMLInputElement);

  const onClick = () => {
    console.log('clicked item', props.title);
    textArea.value = props.value + '\n';
    textArea.focus();
    setIsPopupVisible(false);
  };

  const onCopy = () => {
    navigator.clipboard.writeText(props.value + '\n');
    setIsPopupVisible(false);
    textArea.focus();
  };

  const onDelete = () => {
    storage.removeItem(props.id);
  };

  return (
    <ItemContainer>
      <ItemPosition>{props.position}</ItemPosition>
      <ItemTitle title={props.title} onClick={onClick}>
        {props.title}
      </ItemTitle>
      <IconButton onClick={onCopy} type="icon">
        <CopyIcon />
      </IconButton>
      <IconButton onClick={() => setIsEditing(true)} type="icon">
        <EditIcon />
      </IconButton>
      <IconButton onClick={onDelete} type="icon">
        <TrashIcon />
      </IconButton>

      {isEditing && (
        <EditNotePopup
          id={props.id}
          title={props.title}
          note={props.value}
          onClose={() => setIsEditing(false)}
        />
      )}
    </ItemContainer>
  );
};

export default Item;

const ItemContainer = styled.div<{ $isDragging?: boolean }>`
  margin: 4px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  background-color: ${({ $isDragging }) =>
    $isDragging ? 'rgba(252, 253, 249, 0.43)' : 'unset'};
`;

const ItemPosition = styled.div`
  min-width: 16px;
  font-size: small;
  text-align: right;
`;

const ItemTitle = styled.button`
  margin: 0 12px 0 4px !important;
  background: none;
  box-shadow: none;
  border: none;
  text-align: start;
  color: unset;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px;
  border-radius: 4px;

  &:hover,
  &:focus-visible {
    outline: 1px solid gray;
    cursor: pointer;
  }
`;
