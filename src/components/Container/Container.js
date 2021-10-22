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

  const handleUpdateNote = ({ id, title, content }) => {
    const _notes = [];
    for (let i = 0; i < notes.length; i++) {
      if (i === id) {
        _notes.push({ id, title, content });
      } else {
        _notes.push(notes[i]);
      }
    }

    setNotes(_notes);
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
