import { getLoginCookie } from "./cookie";

export function checkLogin() {
  return sessionStorage.getItem("token") || getLoginCookie("token");
}
