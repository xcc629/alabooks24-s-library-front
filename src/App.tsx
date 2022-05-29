import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { ContextProvider } from "./context/context";

import TopNav from "./components/molocule/navs/TopNav";
import MiddleNav from "./components/molocule/navs/MiddleNav";
import Main from "./pages/main";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Detail from "./pages/detail";
import Cartpage from "./pages/cart";
import SignNav from "./components/molocule/navs/SignNav";

function Router() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/books" />} />
          <Route path="/account/*" element={<SignupLayout />} />
          <Route path="/" element={<Layout />}>
            <Route path="/books" element={<Main />} />
            <Route path="/books/:id" element={<Detail />} />
            <Route path="/cart" element={<Cartpage />} />
          </Route>

          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default Router;

function SignupLayout() {
  return (
    <>
      <SignNav />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <>
      <TopNav />
      <MiddleNav />
      <Outlet />
    </>
  );
}
