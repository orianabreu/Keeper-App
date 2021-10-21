import React, { useState } from "react";

export default function Note(props) {
  const [editNote, setEditNote] = useState(false);
  const [currentNote, setCurrentNote] = useState({
    editTitle: "",
    editContent: "",
  });

  const handleDelete = () => {
    props.deleteNote(props.id);
  };

  const handleEdit = () => {
    setEditNote(true);
    setCurrentNote({ ...props.noteText });
  };

  const handleInputEdit = (event) => {
    const { name, value } = event.target;

    setCurrentNote((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const updateNote = () => {
    props.handleUpdateNote(currentNote);
    setEditNote(false);
  };

  return (
    <div>
      {editNote ? (
        <div className='note'>
          <input
            type='text'
            name='edittitle'
            value={currentNote.editTitle}
            onChange={handleInputEdit}
            className='edit-input'
          />
          <textarea
            name='editcontent'
            value={currentNote.editContent}
            row='1'
            onChange={handleInputEdit}
            className='edit-input'
          />
          <button onClick={() => setEditNote(false)}>Cancel</button>
          <button onClick={updateNote}>Save</button>
        </div>
      ) : (
        <div className='note' onDoubleClick={handleEdit}>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handleDelete}>DELETE</button>
        </div>
      )}
    </div>
  );
}
