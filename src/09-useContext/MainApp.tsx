import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { NavLink } from "react-router-dom";

import { AboutPage, HomePage, LoginPage } from "./views";
import { Navbar } from "./structure/Navbar";

export const MainApp = () => {
  return (
    <>
      <h1>useContext App</h1>
      <Navbar />
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
