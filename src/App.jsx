import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Main from "./components/Main/Main";
import About from "./components/About/about";
import Resume from "./components/Resume/resume";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
import Squares from "./components/Squares/squares";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
          <Squares speed={0.5} 
squareSize={50}
direction='right' // up, down, left, right, diagonal
borderColor='#54577C'
hoverFillColor='#222'/>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
