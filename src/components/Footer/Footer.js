import React from "react";
import { useTheme } from "../../ThemeContext/ThemeContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const darkTheme = useTheme();

  const themeStyles = {
    color: darkTheme ? "#eee" : "#ccc",
  };

  return (
    <footer>
      <p style={themeStyles}>Copyright © {year}</p>
    </footer>
  );
}
