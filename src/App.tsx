import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Provider } from "mobx-react";

import TopNav from "./components/molocule/navs/TopNav";
import MiddleNav from "./components/molocule/navs/MiddleNav";
import Main from "./pages/main";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Detail from "./pages/detail";
import Cartpage from "./pages/cart";
import SignNav from "./components/molocule/navs/SignNav";
import Test from "./pages/test";
import FallMessageAlert from "./components/atomic/FallMessageAlert";
import ModalStore from "./stores/modalStore";

const modalStore = new ModalStore();

function Router() {
  return (
    <BrowserRouter>
      <Provider modalStore={modalStore}>
        <Routes>
          <Route path="/" element={<Navigate to="/books" />} />
          <Route path="/account/*" element={<SignupLayout />} />
          <Route path="/" element={<Layout />}>
            <Route path="/books" element={<Main />} />
            <Route path="/books/:id" element={<Detail />} />
            <Route path="/cart" element={<Cartpage />} />
          </Route>

          <Route path="/test" element={<Test />} />

          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        <FallMessageAlert />
      </Provider>
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
