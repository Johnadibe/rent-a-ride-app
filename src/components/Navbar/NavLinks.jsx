import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NavLinks = ({ toggleNavbar }) => {
  const handleLogout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('id');
    setIsLoggedIn(false);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const userId = localStorage.getItem('id');
    setIsLoggedIn(!!userId);
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem('id');
    setIsLoggedIn(!!userId);
  }, [localStorage.getItem('id')]);

  const isActive = (path) => location.pathname === path;

  return (
    <ul className="mt-4 w-full text-lg sm:text-xl" onClick={toggleNavbar}>
      <li
        className={`pl-4 py-2 ${
          isActive('/')
            ? 'bg-cyan-900 text-white'
            : 'hover:bg-cyan-900 hover:text-white'
        }`}
      >
        <NavLink to="/">Tours</NavLink>
      </li>
      <li
        className={`pl-4 py-2 ${
          isActive('/reservations')
            ? 'bg-cyan-900 text-white'
            : 'hover:bg-cyan-900 hover:text-white'
        }`}
      >
        <NavLink to="/reservations">My Reservations</NavLink>
      </li>
      <li
        className={`pl-4 py-2 ${
          isActive('/add-tour')
            ? 'bg-cyan-900 text-white'
            : 'hover:bg-cyan-900 hover:text-white'
        }`}
      >
        <NavLink to="/add-tour">Add a Tour</NavLink>
      </li>
      <li
        className={`pl-4 py-2 ${
          isActive('/delete-motorcycle')
            ? 'bg-cyan-900 text-white'
            : 'hover:bg-cyan-900 hover:text-white'
        }`}
      >
        <NavLink to="/delete-tour">Delete Tour</NavLink>
      </li>
      {isLoggedIn ? (
        <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
          <NavLink to="/" onClick={handleLogout}>
            Logout
          </NavLink>
        </li>
      ) : (
        <li className="pl-4 py-2 hover:bg-cyan-900 hover:text-white">
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
