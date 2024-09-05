import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import PageWork from "./pages/PageWork";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" exact element={<PageHome />}></Route>
        <Route path="/work/:id" exact element={<PageWork />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
