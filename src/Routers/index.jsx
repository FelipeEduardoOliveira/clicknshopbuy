import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import RedirectPage from "../Pages";

const Rotas = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="*" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
