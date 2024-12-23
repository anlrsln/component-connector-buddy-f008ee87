import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">Logo</span>
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/items"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
            >
              Items
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;