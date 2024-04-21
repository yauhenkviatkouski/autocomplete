import { useCallback, useEffect, useState } from 'preact/hooks';
import { useGetGlobalContext } from '../services/GlobalContext';
import { getTextAreaForPrompt } from '../helpers';
import { useGetStorageContext } from '../services/StorageContext';

const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const useHotKeysController = () => {
  const [textArea] = useState(() => getTextAreaForPrompt() as HTMLInputElement);
  const { setIsPopupVisible } = useGetGlobalContext();
  const { items } = useGetStorageContext();

  const onHotkeyClick = useCallback(
    (number: number) => {
      const item = items[number - 1];
      if (!item || !textArea) {
        return;
      }
      textArea.value = item.value + '\n';
      textArea.focus();
      setIsPopupVisible(false);
    },
    [items, setIsPopupVisible, textArea]
  );

  useEffect(() => {
    const handleKeyDown = ({ altKey, key }: KeyboardEvent) => {
      if (altKey && NUMBERS.includes(key)) {
        onHotkeyClick(Number(key));
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onHotkeyClick]);
};
