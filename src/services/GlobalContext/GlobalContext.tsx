import { createContext } from 'preact';
import { SetStateAction } from 'preact/compat';
import { useContext, useState } from 'preact/hooks';

interface AppContextProviderProps extends React.PropsWithChildren {
  appContainerRef: React.RefObject<HTMLDivElement>;
}

export const AppContext = createContext<{
  appContainerRef: React.RefObject<HTMLDivElement> | null;
  isPopupVisible: boolean;
  setIsPopupVisible: SetStateAction<boolean>;
}>({
  appContainerRef: null,
  isPopupVisible: false,
  setIsPopupVisible: () => {},
});

export const AppContextProvider = ({
  appContainerRef,
  children,
}: AppContextProviderProps) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <AppContext.Provider value={{ appContainerRef, isPopupVisible, setIsPopupVisible }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGetGlobalContext = () => useContext(AppContext);
