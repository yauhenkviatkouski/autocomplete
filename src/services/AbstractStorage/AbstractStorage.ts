import { Item } from '../../types';

export abstract class AbstractStorage {
  protected abstract setItems(items: Item[]): void;
  protected abstract getItems(): Promise<Item[]>;
  protected abstract updateItem(partialItem: Omit<Item, 'position'>): void;
  protected abstract addItem(partialItem: Omit<Item, 'id'>): Promise<Item>;
  protected abstract removeItem(id: string): void;
}
