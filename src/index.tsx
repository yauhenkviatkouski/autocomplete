import { render } from "preact";

import "./style.css";

export function App() {
  return (
    <div>
      Extension
      <button onClick={() => console.log("clicked")}>click me</button>
    </div>
  );
}

render(<App />, document.getElementById("app"));
