import React from "react";

const Pet = ({ name, animal, bread }) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, name),
    React.createElement("h3", {}, animal),
    React.createElement("h3", {}, bread),
  ]);
};

export default Pet;
