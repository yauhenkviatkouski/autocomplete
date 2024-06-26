import { Item } from '../types';
import { MAIN_CONTAINER_ID, SETTINGS } from '../variables';

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

export const getElementBySelector = (selector: string) => {
  function findInShadowRoots(element: Element) {
    let foundElement: Element | null = null;
    if (element.shadowRoot) {
      foundElement = element.shadowRoot.querySelector(selector);
      if (foundElement) {
        return foundElement;
      }
      const shadowElements = element.shadowRoot.querySelectorAll('*');
      shadowElements.forEach((shadowElement) => {
        foundElement = findInShadowRoots(shadowElement) || foundElement;
      });
    }
    return foundElement;
  }

  let foundElement = document.querySelector(selector);
  if (foundElement) {
    return foundElement;
  }

  const allElements = document.querySelectorAll('*');
  allElements.forEach((element) => {
    foundElement = findInShadowRoots(element) || foundElement;
  });

  return foundElement;
};

export const getElementByListOfSelectors = (selectors: string[]) => {
  for (const selector of selectors) {
    const container = getElementBySelector(selector);
    if (container) {
      return container;
    }
  }
};

export const getTextAreaForPrompt = () =>
  getElementByListOfSelectors(SETTINGS.DEFAULT_TEXTAREA_SELECTORS) as Element;

export const getMainContainer = () =>
  getElementBySelector(`#${MAIN_CONTAINER_ID}`) as Element;
