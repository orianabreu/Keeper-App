import React from "react";

import "./styles/style.css";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <Container />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
