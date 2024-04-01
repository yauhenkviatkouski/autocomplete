import { useState } from 'preact/hooks';
import { Button } from '../Shared';
import style from './style.module.scss';
import { ChangeEvent } from 'preact/compat';
import { Modal } from '../Modal';
import { useGetStorageContext } from '../StorageContext';

interface EditNotePopupProps {
  onClose: () => void;
  id?: string;
  title?: string;
  note?: string;
}

const EditNotePopup = (props: EditNotePopupProps) => {
  const [title, setTitle] = useState(props.title || '');
  const [note, setNote] = useState(props.note || '');
  const { storage, items } = useGetStorageContext();

  const handleChangeText = (e: ChangeEvent<HTMLInputElement, Event>) => {
    setTitle((e.target as HTMLInputElement).value);
  };

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement, Event>) => {
    setNote((e.target as HTMLTextAreaElement).value);
  };

  const onSave = () => {
    if (props.id) {
      storage.updateItem({
        id: props.id,
        title: title || note,
        value: note,
      });
    } else {
      storage.addItem({
        title: title || note,
        value: note,
        position: items.length,
      });
    }
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <div className={style.edit_note_popup}>
        <input
          placeholder="Title"
          type="text"
          value={title}
          onChange={handleChangeText}
        />
        <textarea
          placeholder="Prompt"
          rows={10}
          value={note}
          onChange={handleChangeTextarea}
        ></textarea>
        <Button disabled={!note} onClick={onSave}>
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default EditNotePopup;
