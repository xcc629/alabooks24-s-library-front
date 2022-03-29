import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../src/pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
