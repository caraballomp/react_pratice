import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";
import Rating from "./Rating";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Star color="pink" isFilled />
      <Star color="blue" />
      <Star color="yellow" isFilled />
      <h3>Rating component (uses Stars):</h3>
      <Rating stars={0} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// <div className="App">
//   <h2>Star Components:</h2>
//   <Star color="pink" isFilled />
//   <Star color="magenta" />
//   <Star color="indigo" isFilled />
//   <h2>Rating Component (uses Stars):</h2>
//   <Rating stars={4} />
