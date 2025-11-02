import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="p-4 shadow-md flex justify-between items-center bg-white sticky top-0 z-50">
    <h1 className="text-2xl font-bold">StitchCraft</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-blue-600">Home</Link>
      <Link to="/services" className="hover:text-blue-600">Services</Link>
      <Link to="/designs" className="hover:text-blue-600">Our Designs</Link>
      <Link to="/contact" className="hover:text-blue-600">Contact Us</Link>
    </div>
  </nav>
);

export default NavBar;
