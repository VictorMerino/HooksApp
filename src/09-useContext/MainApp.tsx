import { Navigate, Route, Routes } from "react-router";

import { AboutPage, HomePage, LoginPage } from "./views";
import { MyNavbar } from "./structure/MyNavBar";

export const MainApp = () => {
  return (
    <>
      <h1>useContext App</h1>
      <MyNavbar />
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
