import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Bora",
      animal: "Dog",
      bread: "Poodle",
    }),
    React.createElement(Pet, {
      name: "Cici",
      animal: "Cat",
      bread: "Domestic Cat",
    }),
    React.createElement(Pet, {
      name: "Zak",
      animal: "Parrot",
      bread: "Budgerigar",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
