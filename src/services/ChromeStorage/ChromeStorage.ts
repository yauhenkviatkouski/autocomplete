import { generateUniqueId } from '../../helpers';
import { Item } from '../../types';
import { CHROME_STORAGE_KEY } from '../../variables';
import { AbstractStorage } from '../AbstractStorage/AbstractStorage';

export class ChromeStorage extends AbstractStorage {
  private onUpdateItems: (items: Array<Item>) => void;

  constructor(onUpdateItems: (items: Array<Item>) => void) {
    super();
    this.onUpdateItems = onUpdateItems;

    chrome.storage.sync.onChanged.addListener((changes) => {
      const items = (changes[CHROME_STORAGE_KEY]?.newValue as Item[]) || [];
      this.onUpdateItems(items);
    });
  }

  async setItems(items: Item[]): Promise<void> {
    try {
      const serializedItems = JSON.stringify(items);
      await chrome.storage.sync.set({ [CHROME_STORAGE_KEY]: serializedItems });
      console.log('Items are set in storage.', await this.getItems());
    } catch (e) {
      throw new TypeError(`Items cannot be serialized to JSON: ${e}`);
    }
  }

  async getItems(): Promise<Item[]> {
    try {
      const storedData = await chrome.storage.sync.get(CHROME_STORAGE_KEY);
      const serializedItems = storedData[CHROME_STORAGE_KEY] as string | undefined;
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
      throw new Error('No items found in storage');
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
