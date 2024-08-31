import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<PageHome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
