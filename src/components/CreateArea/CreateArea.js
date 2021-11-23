import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { amber, yellow } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import { useTheme } from "../../ThemeContext/ThemeContext";

export default function CreateArea(props) {
  const [noteText, setNoteText] = useState({
    title: "",
    content: "",
  });

  const [expandedNote, setExpandedNote] = useState(false);

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

  const darkTheme = useTheme();

  const FabButton = styled(Fab)({
    backgroundColor: darkTheme ? yellow[50] : amber[500],
    color: darkTheme ? "black" : "#fff",
    "&:hover": {
      backgroundColor: darkTheme ? yellow[100] : amber[400],
      borderColor: darkTheme ? yellow[100] : amber[400],
    },
  });

  const formStyles = {
    backgroundColor: darkTheme ? "#202124" : "#fff",
    border: darkTheme && "solid 1px #eee",
  };
  const inputStyles = {
    backgroundColor: darkTheme ? "#202124" : "#fff",
    color: darkTheme ? "#eee" : "black",
  };

  return (
    <div>
      <form style={formStyles}>
        {expandedNote && (
          <input
            type='text'
            name='title'
            value={title}
            onChange={handleChange}
            placeholder='Title'
            style={inputStyles}
          />
        )}
        <textarea
          name='content'
          value={content}
          row={expandedNote ? "6" : "1"}
          placeholder='Take a note...'
          onChange={handleChange}
          onClick={() => setExpandedNote(true)}
          style={inputStyles}
        />
        <Zoom in={expandedNote}>
          <FabButton
            aria-label='add'
            className='addnote-btn'
            onClick={handleClick}
          >
            <AddIcon />
          </FabButton>
        </Zoom>
      </form>
    </div>
  );
}
