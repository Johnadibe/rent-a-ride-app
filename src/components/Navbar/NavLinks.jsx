import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NavLinks = ({ toggleNavbar }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (

    <ul className="mt-4 w-full text-lg sm:text-lg font-bold" onClick={toggleNavbar}>
      <li
        className={`pl-4 py-2 ${
          isActive('/')
            ? 'bg-lGreen text-white'
            : 'hover:bg-lGreen hover:text-white'
        }`}
      >
        <NavLink to="/">TOURS</NavLink>
      </li>
      <li
        className={`pl-4 py-2 ${
          isActive('/reservations')
            ? 'bg-lGreen text-white'
            : 'hover:bg-lGreen hover:text-white'
        }`}
      >
        <NavLink to="/reservations">MY RESERVATIONS</NavLink>
      </li>
      <li
        className={`pl-4 py-2 ${
          isActive('/add-tour')
            ? 'bg-lGreen text-white'
            : 'hover:bg-lGreen hover:text-white'
        }`}
      >
        <NavLink to="/add-tour">ADD A TOUR</NavLink>
      </li>
      <li
        className={`pl-4 py-2 ${
          isActive('/delete-tour')
            ? 'bg-lGreen text-white'
            : 'hover:bg-lGreen hover:text-white'
        }`}
      >
        <NavLink to="/delete-tour">DELETE TOUR</NavLink>
      </li>
      {isLoggedIn ? (
        <li className="pl-4 py-2 hover:bg-lGreen hover:text-white ">
          <NavLink to="/" onClick={handleLogout}>
            LOGOUT
          </NavLink>
        </li>
      ) : (
        <li className="pl-4 py-2 hover:bg-lGreen hover:text-white sm:text-lg">
          <NavLink to="/login">LOGIN</NavLink>
        </li>

      )}

    </ul>
  );
};

export default NavLinks;
