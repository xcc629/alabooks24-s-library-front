import BASE_URL from "../config";
import { getLoginCookie } from "../utils/cookie";

export const postCardtIn = async (bookId) => {
  return await fetch(`${BASE_URL}/members/cart/${bookId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${
        getLoginCookie("token")
          ? getLoginCookie("token")
          : sessionStorage.getItem("token")
      }`,
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const deleteCartOut = async (bookId) => {
  return await fetch(`${BASE_URL}/members/cart/${bookId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${
        getLoginCookie("token")
          ? getLoginCookie("token")
          : sessionStorage.getItem("token")
      }`,
    },
  });
};
