import React, { useState } from "react";

function DivCreator() {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBox = {
      height: height + "px",
      width: width + "px",
      backgroundColor: color
    };

    setBoxes([...boxes, newBox]);

    // clear inputs
    setHeight("");
    setWidth("");
    setColor("");
  };

  return (
    <div>
      <h2>Créer et afficher des DIV dynamiques</h2>

      {/* Formulaire */}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Height (px)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Width (px)"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Background color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />

        <button type="submit">Add Div</button>
      </form>

      {/* Affichage des div */}
      <div style={{ marginTop: "20px" }}>
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              height: box.height,
              width: box.width,
              backgroundColor: box.backgroundColor,
              marginBottom: "10px"
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default DivCreator;