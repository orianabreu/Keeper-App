import React, { useState } from "react";

import Note from "../Note/Note";
import CreateArea from "../CreateArea/CreateArea";

export default function Container() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  const handleUpdateNote = (id, updatedNote) => {
    const updatedItem = notes.map((note, index) => {
      return index === id ? updatedNote : note;
    });
    setNotes(updatedItem);
  };

  return (
    <div>
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
            handleUpdateNote={handleUpdateNote}
          />
        );
      })}
    </div>
  );
}
