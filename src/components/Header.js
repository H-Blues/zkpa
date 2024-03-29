import React from 'react';
import logoImage from '../assets/logo.png';

const Header = () => {
  return (
    <header className="bg-gray-800 py-1">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/">
            <img src={logoImage} alt="ZKPA Logo" className="h-16" />
          </a>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/camera" className="text-gray-300 hover:text-white">
                Camera
              </a>
            </li>
            <li>
              <a href="/doc" className="text-gray-300 hover:text-white">
                Doc
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
