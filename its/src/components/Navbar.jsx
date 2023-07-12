import React, { useState } from "react";
import Grouptruck from "../images/grouptruck.jpeg";

const Navbar = () => {
  return (
    <div className="flex justify-end items-center h-24 w-full bg-cyan-600 text-white text-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="hidden md:flex space-x-4">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Careers</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
