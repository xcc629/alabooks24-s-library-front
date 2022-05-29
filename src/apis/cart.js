import BASE_URL from "../config";
import { getLoginCookie } from "../utils/cookie";

export const getCart = async () => {
  try {
    const res = await fetch(`${BASE_URL}/members/cart`, {
      method: "GET",
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
    const data = await res.json();
    if (data.message) throw Error("No Login");
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const postCartIn = async (bookId) => {
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

export const cartTotalCount = async () => {
  return await fetch(`${BASE_URL}/members/cart/totalCount`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${
        localStorage.getItem("token")
          ? localStorage.getItem("token")
          : sessionStorage.getItem("token")
      }`,
    },
  });
};
