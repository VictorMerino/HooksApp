import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";

import { AboutPage, HomePage, LoginPage } from "./views";

export const MainApp = () => {
  return (
    <>
      <h1>useContext App</h1>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/about">About</NavLink>
      <hr />

      <Routes>
        <Route path="/" id="homePage" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>

        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};
