import React from "react";
import styled from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='men'element={<Men/>}/>
      <Route path='women'element={<Women/>}/>
      <Route path='about'element={<About/>}/>
      <Route path='contact'element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  
}

export default App;
