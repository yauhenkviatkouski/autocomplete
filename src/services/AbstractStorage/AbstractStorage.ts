import { Item } from "../../types";

export abstract class AbstractStorage {
  protected abstract setItems(items: Item[]): void;
  protected abstract getItems(): Promise<Item[] | undefined>;
  protected abstract updateItem(item: Item): void;
  protected abstract addItem(partialItem: Omit<Item, "id">): Promise<Item>;
  protected abstract removeItem(id: string): void;
}
