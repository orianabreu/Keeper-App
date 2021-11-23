import React from "react";
import { yellow } from "@mui/material/colors";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness3Icon from "@mui/icons-material/Brightness3";

import { useTheme, useThemeUpdate } from "../../ThemeContext/ThemeContext";

export default function Header() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#202124" : "#f5ba13",
    border: darkTheme && "solid 1px #eee",
  };

  return (
    <header style={themeStyles}>
      <h1>Keeper</h1>
      <div onClick={toggleTheme}>
        {darkTheme ? (
          <Brightness4Icon fontSize='large' sx={{ color: yellow[50] }} />
        ) : (
          <Brightness3Icon fontSize='large' sx={{ color: yellow[50] }} />
        )}
      </div>
    </header>
  );
}
