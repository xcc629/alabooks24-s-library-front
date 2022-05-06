import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Detail from "./pages/bookdetail/Detail";
import Cartpage from "./pages/cart/Cart";

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
