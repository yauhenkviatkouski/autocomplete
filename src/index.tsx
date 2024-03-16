import { render } from "preact";
import packageJson from "../package.json";

import { MainPopup } from "./Components/MainPopup";

console.log("extension loaded");
console.log(location.hash);

const chromeExtensionPanelContainer = document.getElementById(packageJson.name);

if (chromeExtensionPanelContainer) {
  render(<MainPopup />, document.getElementById(packageJson.name));
}
