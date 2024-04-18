import React from "react";

const NoteList = ({ notes }) => {
  //Funcion para generar un color random y mandarla al css
  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const squareStyle = {
    width: "100px",
    height: "100px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
  };

  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {/* Mapa de note*/}
      {notes.map((note) => (
        <li
          key={note.id}
          style={{ ...squareStyle, backgroundColor: generateRandomColor() }}
        >
          {note.content}
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
