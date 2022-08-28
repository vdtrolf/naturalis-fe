import React from "react";

export default function Footer(props) {
  const penguins = [
    { id: 1, name: "titi" },
    { id: 2, name: "tata" },
    { id: 3, name: "toto" },
  ];

  const listPenguins = penguins.map((penguin) => {
    return <li key={penguin.id}>{penguin.name}</li>;
  });

  return (
    <div className="Footer">
      <ul className="PenguinsList">{listPenguins}</ul>
    </div>
  );
}
