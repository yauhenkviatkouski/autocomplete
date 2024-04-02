import { Item } from '../types';

export const generateUniqueId = (existingItems: Item[] = []): string => {
  const usedIds = new Set(existingItems.map((item) => item.id));
  let id = '';
  do {
    id = `${new Date().getTime()}-${Math.random().toString(36).substring(2, 9)}`;
  } while (usedIds.has(id));
  return id;
};

export const sortItemsAndRemoveGaps = (items: Item[]) => {
  const sortedItems = items
    .sort((a, b) => a.position - b.position)
    .map((item, index) => ({
      ...item,
      position: index + 1,
    }));
  return sortedItems;
};

export const getTextAreaElement = () =>
  document.getElementById('prompt-textarea') || document.getElementById('searchbox');

export const handleShadowRoots = (element: Element) => {
  if (element.shadowRoot) {
    console.log('shadow-root');
    const textarea = element.shadowRoot.querySelector('textarea');
    if (textarea) {
      console.log(textarea);
    }

    const shadowElements = element.shadowRoot.querySelectorAll('*');
    shadowElements.forEach((shadowElement) => {
      handleShadowRoots(shadowElement);
    });
  }
};

// const allElements = document.querySelectorAll('*');
// allElements.forEach((element) => {
//   handleShadowRoots(element);
// });
