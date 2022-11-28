import { Navigate, Route, Routes } from "react-router";

import { UserProvider } from "./context/UserProvider";
import { AboutPage, HomePage, LoginPage } from "./views";
import { MyNavbar } from "./structure/MyNavbar";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>useContext App</h1>
      <MyNavbar />
      <hr />

      <Routes>
        <Route path="/" id="homePage" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>

        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
    </UserProvider>
  );
};
