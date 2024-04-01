import { render } from 'preact';
import { PopupButton } from './Components/PopupButton';
import { DevelopmentPage } from './Components/DevelopmentPage';
import {
  CHROME_PANEL_CONTAINER_ID,
  LOCALHOST,
  POPUP_BUTTON_CONTAINER_ID,
} from './variables';

import style from './style.module.scss';
import { getTextAreaElement } from './helpers';

const renderPopupButton = () => {
  const textarea = getTextAreaElement();

  if (textarea) {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = style['popup-container'];
    buttonContainer.id = POPUP_BUTTON_CONTAINER_ID;
    textarea.parentElement?.insertBefore(buttonContainer, textarea);
    render(<PopupButton />, buttonContainer);
  }
};

const renderApp = () => {
  const isDevelopmentMode = location.hostname.includes(LOCALHOST);
  const chromeExtensionPanelContainer = document.getElementById(
    CHROME_PANEL_CONTAINER_ID
  );

  if (!chromeExtensionPanelContainer) {
    renderPopupButton();
    return;
  }

  if (isDevelopmentMode) {
    render(<DevelopmentPage />, chromeExtensionPanelContainer);
    renderPopupButton();
  } else {
    render(<p>Settings</p>, chromeExtensionPanelContainer);
  }
};

renderApp();
