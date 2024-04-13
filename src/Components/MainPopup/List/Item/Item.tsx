import { Button } from '../../../Shared';
import EditIcon from '../../../Icons/EditIcon';
import TrashIcon from '../../../Icons/TrashIcon';
import { useState } from 'preact/hooks';
import EditNotePopup from '../../../EditNotePopup/EditNotePopup';
import { useGetStorageContext } from '../../../../services/StorageContext';
import { getTextAreaForPrompt } from '../../../../helpers';
import styled, { css } from 'styled-components';

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

  const onClick = () => {
    console.log('clicked item', props.title);
    const textArea = getTextAreaForPrompt() as HTMLInputElement;
    console.log('🚀 > onClick > textArea:', textArea);
    textArea.value = props.value + '\n';
    textArea.focus();
  };

  const onDelete = () => {
    storage.removeItem(props.id);
  };

  return (
    <ItemContainer>
      <ItemPosition></ItemPosition>
      <ItemTitle title={props.title} onClick={onClick}>
        {props.title}
      </ItemTitle>
      <Button onClick={() => setIsEditing(true)} type="icon">
        <EditIcon />
      </Button>
      <Button onClick={onDelete} type="icon">
        <TrashIcon />
      </Button>

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
  gap: 16px;
  background-color: ${({ $isDragging }) =>
    $isDragging ? 'rgba(252, 253, 249, 0.43)' : 'unset'};
`;

const ItemPosition = styled.div`
  min-width: 16px;
  font-size: small;
  text-align: right;
`;

const ItemTitle = styled.button`
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
