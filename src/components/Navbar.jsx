import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to={'/contacto'}>Contacto</Link>
    </nav>
  );
};

export default Navbar;
