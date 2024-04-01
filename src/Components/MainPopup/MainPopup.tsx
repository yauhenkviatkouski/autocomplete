import { useState } from 'preact/hooks';
import { Button } from '../Shared';
import { List } from './List';
import EditNotePopup from '../EditNotePopup/EditNotePopup';
import style from './MainPopup.module.scss';

const MainPopup = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <main className={style.main_popup}>
        <List />
        <div className={style.main_popup__add_button_container}>
          <Button onClick={() => setIsEditing(true)}>Add</Button>
        </div>
      </main>
      {isEditing && <EditNotePopup onClose={() => setIsEditing(false)} />}
    </>
  );
};

export default MainPopup;
