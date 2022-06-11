import React from "react";
import Card from "./Card";
import { emojipedia } from "../emojipedia";
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        <Card key="1" {...emojipedia[0]} />
        <Card key="1" {...emojipedia[1]} />
        <Card key="1" {...emojipedia[2]} />
      </dl>
    </div>
  );
}

export default App;
