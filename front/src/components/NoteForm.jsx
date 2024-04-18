// NoteForm.js
import React, { useState } from "react";
import axios from "axios";

const NoteForm = ({ baseUrl, setNotes }) => {
  const [newNote, setNewNote] = useState("");

  //Si se actualiza el input de la nota, la newNote se actualiza
  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    marginLeft: "10px",
  };

  const inputStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
  };

  //Cuando se hace submit en el form se crea un objeto con la nota para poder mandarlo a la base de datos
  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString(),
    };
    //Despues de que se hace el objeto se hace un post a la base de datos y usando el setNotes del app.jsx hace una append de la nota
    axios.post(baseUrl, noteObject).then((response) => {
      setNotes((notes) => notes.concat(response.data));
      setNewNote("");
    });
  };

  return (
    <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange} style={inputStyle} />
      <button type="submit" style={buttonStyle}>
        save
      </button>
    </form>
  );
};

export default NoteForm;
