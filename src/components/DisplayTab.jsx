import React, { useState } from "react";

function DisplayTab({ data }) {
  const [tab, setTab] = useState(data);

  const removeItem = (index) => {
    setTab(tab.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {tab.map((item, index) => (
        <li
          key={index}
          style={{ cursor: "pointer" }}
          onClick={() => removeItem(index)}
        >
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const tab = ["hello", "world", "from", "react"];

  return (
    <div>

      {/* Q1 — Afficher la liste simple */}
      <h2>Q1 — Liste simple</h2>
      <ul>
        {tab.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Q2 — Afficher "Element x is:" */}
      <h2>Q2 — Avec numérotation</h2>
      <ul>
        {tab.map((item, index) => (
          <li key={index}>
            Element {index + 1} is: {item}
          </li>
        ))}
      </ul>

      {/* Q3/Q4/Q5 — Supprimer au clic + paramétrage + deux tableaux */}
      <h2>Q3/Q4/Q5 — Version finale (click pour supprimer + props)</h2>

      <h3>Tableau 1 :</h3>
      <DisplayTab data={["hello", "world", "from", "react"]} />

      <h3>Tableau 2 :</h3>
      <DisplayTab data={["apple", "banana", "cherry"]} />
    </div>
  );
}

export default App;