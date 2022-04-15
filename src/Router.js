import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import Login from "../src/pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Detail from "./pages/Detail/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/books/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/books" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
