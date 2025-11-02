import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Designs from "./components/Designs";
import Contact from "./components/Contact";

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/designs" element={<Designs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
