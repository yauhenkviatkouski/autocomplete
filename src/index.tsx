import { render } from "preact";
import packageJson from "../package.json";
import { MainPopup } from "./Components/MainPopup";
import style from "./style.module.scss";

import { PopupButton } from "./Components/PopupButton";

console.log("extension loaded");

// console.log(process.env);
const q = 1;
const r = 1;
// const waassdasdasd;
const isDevelopmentMode = location.hostname.includes("127");
const chromeExtensionPanelContainer = document.getElementById(packageJson.name);
// TODO: textArea - any area from different GPT resources
const textarea = document.getElementById("prompt-textarea");

if (!isDevelopmentMode && chromeExtensionPanelContainer) {
  render(<MainPopup />, document.getElementById(packageJson.name));
} else if (textarea) {
  const buttonContainer = document.createElement("div");
  buttonContainer.className = style["popup-container"];
  textarea.parentElement.insertBefore(buttonContainer, textarea);
  render(<PopupButton />, buttonContainer);
}
