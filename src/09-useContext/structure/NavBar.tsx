import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
