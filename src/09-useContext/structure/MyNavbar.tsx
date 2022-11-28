import React from "react";
import { NavLink } from "react-router-dom";

export const MyNavbar = () => {
  const isItemActive = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? "active" : ""}`;
  return (
    <nav className="navbar navbar-light navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <NavLink className={isItemActive} to="/">
            Homepage
          </NavLink>
          <NavLink className={isItemActive} to="/login">
            Login
          </NavLink>
          <NavLink className={isItemActive} to="/about">
            About
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
