// import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <nav>
      <ul className="flex space-x-2">
        <li><Link to="/">Home</Link></li>
        <li>/</li>
        <li><Link to="/about">About</Link></li>
        <li>/</li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
