import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PageHome from "./pages/PageHome";
import Header from "./components/Header";
import Nav from "./components/Nav";
import PageWork from "./pages/PageWork";
import ScrollProgressBar from "./components/ScrollProgressbar";
import { GlobalProvider } from "./context/GlobalState";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function AppRouter() {
  return (
    <BrowserRouter basename={`/`}>
      <GlobalProvider>
        <ScrollProgressBar />
        <ScrollToHash />
        <Header />
        <Nav />
        <Routes>
          <Route path="/" exact element={<PageHome />}></Route>
          <Route path="/work/:id" element={<PageWork />}></Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
