import { Cookies } from "react-cookie";

const cookie = new Cookies();

export const setLoginCookie = (name, value) => {
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 30);

  return cookie.set(name, value, {
    path: "/",
    secure: true,
    sameSite: "none",
    expires,
  });
};

export const getLoginCookie = (name) => {
  return cookie.get(name);
};
