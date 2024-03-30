import { useState } from "preact/hooks";
import { Button } from "../Shared";
import style from "./style.module.scss";
import { ChangeEvent } from "preact/compat";
import { Modal } from "../Modal";

interface EditNotePopupProps {
  title?: string;
  note?: string;
  onClose: () => void;
  onSave?: (title: string, note: string) => void;
}

const EditNotePopup = (props: EditNotePopupProps) => {
  const [title, setTitle] = useState(props.title);
  const [note, setNote] = useState(props.note);

  const handleChangeText = (e: ChangeEvent<HTMLInputElement, Event>) => {
    setTitle((e.target as HTMLInputElement).value);
  };

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement, Event>) => {
    setNote((e.target as HTMLTextAreaElement).value);
  };

  return (
    <Modal onClose={props.onClose}>
      <form className={style.edit_note_popup} onSubmit={() => console.log(e)}>
        <input type="text" value={title} onChange={handleChangeText} />
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          value={note}
          onChange={handleChangeTextarea}
        ></textarea>
        <Button type="submit">Save</Button>
      </form>
    </Modal>
  );
};

export default EditNotePopup;
