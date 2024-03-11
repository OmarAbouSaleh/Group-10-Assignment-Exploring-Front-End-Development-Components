import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-lg font-bold text-white">
            A+
          </a>
          <button
            className="lg:hidden ml-2 text-white"
            type="button"
            aria-label="Toggle navigation"
          >
            <span className="block text-2xl">&#8801;</span>
          </button>
          <div className="hidden lg:flex lg:items-center space-x-4">
            <a href="/students.js" className="text-white hover:text-gray-300">
              Students
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Grades
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Schedule
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Resources
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
