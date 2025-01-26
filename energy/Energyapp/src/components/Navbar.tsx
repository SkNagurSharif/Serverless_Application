import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-2 fixed top-0 w-full">
      <div className="container mx-auto flex justify-between items-center space-x-2">
        <Logo />
        <NavLinks />
      </div>
    </nav>
  );
};

const Logo: React.FC = () => {
  return (
    <Link to="/" className="text-lg font-bold text-white">
      Logo
    </Link>
  );
};

const NavLinks: React.FC = () => {
  return (
    <ul className="list-none flex space-x-4">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
    </ul>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  return (
    <Link to={to} className="text-white hover:text-gray-100">
      {children}
    </Link>
  );
};

export default Navbar;