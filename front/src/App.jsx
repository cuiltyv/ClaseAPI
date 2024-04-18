// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";

const baseUrl = "http://localhost:3001/api/notes";

const App = () => {
  const [notes, setNotes] = useState([]);

  //Este useEffect ejecuta un get en la base de datos y usando setNotes, le da el valor de las notas a notes
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <div>
      {/* Componente Header lo unico que tiene es un <h1> con estilo*/}
      <Header />
      {/* Componente NoteList, le mando notes y usando un mapa con el prop de notes que se manda las despliega*/}
      <NoteList notes={notes} />
      {/* Componente NoteForm, en este componente se le manda el baseURL para que pueda realizar la llamada a la api, tambien se la manda
      setNotes para hacer apend de las notas creadas*/}
      <NoteForm baseUrl={baseUrl} setNotes={setNotes} />
    </div>
  );
};

export default App;
