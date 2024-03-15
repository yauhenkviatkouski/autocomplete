import { render } from "preact";

import "./style.css";

console.log("extension loaded");

export function App() {
  return (
    <div className="some-class-name">
      Extension
      <button onClick={() => console.log("clicked")}>click me</button>
    </div>
  );
}

render(<App />, document.getElementById("app")?.parentNode);
