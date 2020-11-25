import React from "react";
import Jumbotron from "./components/Jumbotron";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Jumbotron />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lets build a movie store
        </a>
      </header>
    </div>
  );
}

export default App;
