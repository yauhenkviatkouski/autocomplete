import { useRef } from 'preact/hooks';
import styled, { StyleSheetManager } from 'styled-components';
import { PopupButton } from './Components/PopupButton';
import { AppContextProvider } from './services/GlobalContext';

type AppProps = { targetStylesNode: HTMLElement };

const App = ({ targetStylesNode }: AppProps) => {
  const appContainerRef = useRef<HTMLDivElement>(null);

  return (
    <StyleSheetManager target={targetStylesNode}>
      <AppContextProvider appContainerRef={appContainerRef}>
        <AppContainer ref={appContainerRef}>
          <PopupButton />
        </AppContainer>
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
    height: baseSize(4);
    width: baseSize(4);
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
