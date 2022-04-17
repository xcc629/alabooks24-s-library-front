import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Login from "../src/pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Detail from "./pages/Detail/Detail";
import Cartpage from "./pages/Cartpage/Cartpage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" element={<Detail />} />
        <Route path="/books/:id" element={<Detail />} />
        <Route path="/cart/" element={<Cartpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
