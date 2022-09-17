import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoFound from "./components/NoFound";
import './assets/css/navbar.css'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <hr />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
