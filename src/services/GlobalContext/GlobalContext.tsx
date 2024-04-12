import { createContext } from 'preact';
import { useContext } from 'preact/hooks';

interface AppContextProviderProps extends React.PropsWithChildren {
  appContainerRef: React.RefObject<HTMLDivElement>;
}

export const AppContext = createContext<{
  appContainerRef: React.RefObject<HTMLDivElement> | null;
}>({
  appContainerRef: null,
});

export const AppContextProvider = ({
  appContainerRef,
  children,
}: AppContextProviderProps) => {
  return (
    <AppContext.Provider value={{ appContainerRef }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
