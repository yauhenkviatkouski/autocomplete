import { Item } from "../types";
import { useState, useCallback, useEffect } from "preact/hooks";

type UseDragAndDropProps = {
  initialItems: Array<Item>;
  onDrop: (items: Array<Item>) => void;
};
export const useDragAndDrop = ({ initialItems, onDrop }: UseDragAndDropProps) => {
  const [items, setItems] = useState(initialItems);
  const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  const handleDragStart = useCallback((e: DragEvent, index: number): void => {
    e.dataTransfer?.setData("itemIndex", index.toString());
    setDraggedItemIndex(index);
  }, []);

  const handleDragOver = useCallback(
    (e: DragEvent, index: number): void => {
      e.preventDefault();
      if (index !== draggedItemIndex && draggedItemIndex !== null) {
        const copiedItems: Array<Item> = [...items];
        const draggedItem: Item = copiedItems[draggedItemIndex];
        copiedItems.splice(draggedItemIndex, 1);
        copiedItems.splice(index, 0, draggedItem);
        setItems(
          copiedItems.map((item: Item, index: number) => ({
            ...item,
            position: index,
          }))
        );
        setDraggedItemIndex(index);
      }
    },
    [draggedItemIndex, items]
  );

  const handleDrop = useCallback(
    (e: DragEvent) => {
      e.preventDefault();
      setDraggedItemIndex(null);
      onDrop(items);
    },
    [items, onDrop]
  );

  return {
    items,
    handleDragStart,
    handleDragOver,
    handleDrop,
    draggedItemIndex,
  };
};
