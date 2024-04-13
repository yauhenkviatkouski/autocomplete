import { useRef } from 'preact/hooks';
import styled, { StyleSheetManager } from 'styled-components';
import { PopupButton } from './Components/PopupButton';
import { AppContextProvider } from './services/GlobalContext';
import { StorageProvider } from './services/StorageContext';

type AppProps = { targetStylesNode: HTMLElement };

const App = ({ targetStylesNode }: AppProps) => {
  const appContainerRef = useRef<HTMLDivElement>(null);

  return (
    <StyleSheetManager target={targetStylesNode}>
      <AppContextProvider appContainerRef={appContainerRef}>
        <StorageProvider>
          <AppContainer ref={appContainerRef}>
            <PopupButton />
          </AppContainer>
        </StorageProvider>
      </AppContextProvider>
    </StyleSheetManager>
  );
};

export default App;

const AppContainer = styled.div`
  // global styles
  color: rgb(14, 14, 14);
  font-family: Helvetica, sans-serif;

  svg {
    height: 16px;
    width: 16px;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }

  img {
    border-style: none;
  }

  a {
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }
`;
