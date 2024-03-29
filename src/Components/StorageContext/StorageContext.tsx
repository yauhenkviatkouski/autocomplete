import { createContext } from "preact/compat";
import { useState, useEffect } from "preact/hooks";
import { ChromeStorage } from "../../services/ChromeStorage";
import { LocalStorage } from "../../services/LocalStorage";

export const StorageContext = createContext(null);

export const StorageProvider = ({ children }) => {
  const [storage, setStorage] = useState(null);

  useEffect(() => {
    const storage = chrome?.storage?.sync
      ? new ChromeStorage(setStorage)
      : new LocalStorage(setStorage);
    setStorage(storage);
  }, []);

  return (
    <StorageContext.Provider value={storage}>
      {children}
    </StorageContext.Provider>
  );
};
