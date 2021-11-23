import React, { useState } from "react";
import { useTheme } from "../../ThemeContext/ThemeContext";

export default function Note({
  id,
  title,
  content,
  handleUpdateNote,
  deleteNote,
}) {
  const [editNote, setEditNote] = useState(false);
  const [currentNote, setCurrentNote] = useState({
    id,
    editTitle: title,
    editContent: content,
  });

  const handleDelete = () => {
    deleteNote(id);
  };

  const handleEdit = () => {
    setEditNote(true);
    setCurrentNote((prevValue) => ({ ...prevValue }));
  };

  const handleInputEdit = (event) => {
    const { name, value } = event.target;

    setCurrentNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const updateNote = () => {
    handleUpdateNote({
      id: currentNote.id,
      title: currentNote.editTitle,
      content: currentNote.editContent,
    });
    setEditNote(false);
  };

  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? "#202124" : "#fff",
    border: darkTheme && "solid 1px #eee",
    color: darkTheme ? "#eee" : "black",
  };

  return (
    <div>
      {editNote ? (
        <div style={themeStyles} className='note'>
          <input
            type='text'
            name='editTitle'
            value={currentNote.editTitle}
            onChange={handleInputEdit}
            className='edit-input'
            style={themeStyles}
          />
          <textarea
            name='editContent'
            value={currentNote.editContent}
            row='1'
            onChange={handleInputEdit}
            className='edit-input'
            style={themeStyles}
          />
          <button onClick={() => setEditNote(false)}>Cancel</button>
          <button onClick={updateNote}>Save</button>
        </div>
      ) : (
        <div style={themeStyles} className='note' onDoubleClick={handleEdit}>
          <h1>{title}</h1>
          <p>{content}</p>
          <button onClick={handleDelete}>DELETE</button>
        </div>
      )}
    </div>
  );
}
