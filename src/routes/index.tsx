import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path={"/"} />
    </Routes>
  );
};
