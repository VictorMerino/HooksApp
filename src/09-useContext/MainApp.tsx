import React from "react";
import { Navigate, Route, Routes } from "react-router";

import { AboutPage, HomePage, LoginPage } from "./views";

export const MainApp = () => {
  return (
    <>
      <h1>useContext App</h1>
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>

        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
};
