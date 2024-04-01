import { generateUniqueId, sortItemsAndRemoveGaps } from '../../helpers';
import { Item } from '../../types';
import { CHROME_STORAGE_KEY } from '../../variables';
import { AbstractStorage } from '../AbstractStorage/AbstractStorage';

export class LocalStorage extends AbstractStorage {
  private onUpdateItems: (items: Array<Item>) => void;

  constructor(onUpdateItems: (items: Array<Item>) => void) {
    super();
    this.onUpdateItems = onUpdateItems;
  }

  async setItems(items: Item[]): Promise<void> {
    try {
      const sortedItems = sortItemsAndRemoveGaps(items);
      const serializedItems = JSON.stringify(sortedItems);
      localStorage.setItem(CHROME_STORAGE_KEY, serializedItems);
      this.onUpdateItems(sortedItems);
      console.log('Items are set in localStorage.', await this.getItems());
    } catch (e) {
      throw new TypeError(`Error during saving Items: ${e}`);
    }
  }

  async getItems(): Promise<Item[]> {
    try {
      const serializedItems = localStorage.getItem(CHROME_STORAGE_KEY);
      if (!serializedItems) {
        return [];
      }
      const parsedItems = JSON.parse(serializedItems) as Item[];
      return parsedItems;
    } catch (e) {
      throw new TypeError(`Invalid data stored for key ${CHROME_STORAGE_KEY}: ${e}`);
    }
  }

  async updateItem(partialItem: Omit<Item, 'position'>): Promise<void> {
    const items = await this.getItems();
    if (!items) {
      throw new Error('No items found in localStorage');
    }

    const updatedItems = items.map((existingItem) =>
      existingItem.id === partialItem.id
        ? { ...existingItem, ...partialItem }
        : existingItem
    );
    await this.setItems(updatedItems);
  }

  async addItem(partialItem: Omit<Item, 'id'>): Promise<Item> {
    const items = (await this.getItems()) || [];
    const uniqueId = generateUniqueId(items);
    const item: Item = {
      ...partialItem,
      id: uniqueId,
    };
    items.push(item);
    await this.setItems(items);
    return item;
  }

  async removeItem(id: string): Promise<void> {
    const items = await this.getItems();
    if (!items) {
      return;
    }

    const filteredItems = items.filter((item) => item.id !== id);
    await this.setItems(filteredItems);
  }
}
