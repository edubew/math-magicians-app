import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <Link className="app__tittle" to="/">Math Magicians</Link>

    <nav>
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quote">Quote</Link>
    </nav>
  </header>
);

export default Navbar;
