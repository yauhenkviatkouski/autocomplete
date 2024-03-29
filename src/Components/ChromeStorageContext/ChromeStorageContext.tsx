import { createContext } from "preact/compat";
import { useState, useEffect } from "preact/hooks";
import { ChromeStorage } from "../../services/ChromeStorage/ChromeStorage";

export const ChromeStorageContext = createContext(null);

export const ChromeStorageProvider = ({ children }) => {
  const [chromeStorage, setChromeStorage] = useState(null);

  useEffect(() => {
    const storage = new ChromeStorage();
    setChromeStorage(storage);
  }, []);

  return (
    <ChromeStorageContext.Provider value={chromeStorage}>
      {children}
    </ChromeStorageContext.Provider>
  );
};
