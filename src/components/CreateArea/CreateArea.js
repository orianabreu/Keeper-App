import React, { useState } from "react";

export default function CreateArea(props) {
  const [noteText, setNoteText] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNoteText((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();

    props.addNote(noteText);
    setNoteText({
      title: "",
      content: "",
    });
  };

  const { title, content } = noteText;

  return (
    <div>
      <form>
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleChange}
          placeholder='Title'
        />
        <textarea
          name='content'
          value={content}
          onChange={handleChange}
          row='3'
          placeholder='Take a note...'
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}
