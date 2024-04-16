import { render } from 'preact';
import { DevelopmentPage } from './Components/DevelopmentPage';

import { CHROME_PANEL_CONTAINER_ID, LOCALHOST, MAIN_CONTAINER_ID } from './variables';

import App from './App';
import { getTextAreaForPrompt } from './helpers';

const renderMainContainer = () => {
  const textarea = getTextAreaForPrompt();

  if (textarea) {
    const mainContainer = document.createElement('div');
    mainContainer.id = MAIN_CONTAINER_ID;
    mainContainer.style.position = 'fixed';
    mainContainer.style.height = '0';
    mainContainer.style.width = '0';

    textarea.parentElement?.insertBefore(mainContainer, textarea);
    render(<App targetStylesNode={mainContainer} />, mainContainer);
  }
};

const renderApp = () => {
  const isDevelopmentMode = location.hostname.includes(LOCALHOST);
  const chromeExtensionPanelContainer = document.getElementById(
    CHROME_PANEL_CONTAINER_ID
  );

  if (!chromeExtensionPanelContainer) {
    renderMainContainer();
    setInterval(() => {
      if (!document.getElementById(MAIN_CONTAINER_ID)) {
        renderMainContainer();
      }
    }, 2000);
    return;
  }

  if (isDevelopmentMode) {
    render(<DevelopmentPage />, chromeExtensionPanelContainer);
    renderMainContainer();
  } else {
    render(<p>Settings</p>, chromeExtensionPanelContainer);
  }
};

// TODO
setTimeout(
  () => {
    renderApp();
  },
  location.href.includes('chat.lab') ? 1000 : 100
);
