import packageJson from '../../package.json';

export const LOCALHOST = '127.0.0.1';
export const CHROME_PANEL_CONTAINER_ID = `${packageJson.name}_chrome_panel_container`;
export const POPUP_BUTTON_CONTAINER_ID = `${packageJson.name}_popup_button_container`;
export const CHROME_STORAGE_KEY = packageJson.name;
export const SETTINGS = {
  DEFAULT_SELECTORS: [
    '[data-qa="message"] textarea',
    'textarea#prompt-textarea',
    'textarea#searchbox',
    'rich-textarea.text-input-field_textarea',
  ],
};
