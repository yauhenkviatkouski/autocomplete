import { createContext } from 'preact/compat';
import { useState, useEffect, useContext } from 'preact/hooks';
import { ChromeStorage } from '../ChromeStorage';
import { LocalStorage } from '../LocalStorage';
import { Item } from '../../types';
import { listFixture } from '../../fixtures/listFixture';

type StorageContextType = {
  items: Item[];
  storage: ChromeStorage | LocalStorage;
};

export const StorageContext = createContext<StorageContextType | null>(null);

interface StorageProviderProps {
  children: React.ReactNode;
}

export const StorageProvider = ({ children }: StorageProviderProps) => {
  const [items, setItems] = useState<Item[]>(listFixture);
  const [storage] = useState(
    chrome?.storage?.sync ? new ChromeStorage(setItems) : new LocalStorage(setItems)
  );

  useEffect(() => {
    async function fetchData() {
      const items = await storage.getItems();
      setItems(items.sort((a, b) => a.position - b.position));
    }
    fetchData();
  }, [storage]);

  return (
    <StorageContext.Provider value={{ items, storage }}>
      {children}
    </StorageContext.Provider>
  );
};

export const useGetStorageContext = () => {
  const context = useContext(StorageContext);
  if (!context) {
    throw new Error('useGetStorageContext must be used within a StorageProvider');
  }
  return context;
};
