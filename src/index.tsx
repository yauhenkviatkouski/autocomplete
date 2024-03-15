import { render } from "preact";
import packageJson from "../package.json";

import "./style.css";

console.log("extension loaded");

export function App() {
  return (
    <div className={`${packageJson.name}-container`}>
      popup content
      <button onClick={() => console.log("clicked")}>click me</button>
    </div>
  );
}

render(<App />, document.getElementById(packageJson.name));
