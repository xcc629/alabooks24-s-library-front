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
    const result = await res.json();

    if (result.message) throw Error(result.message);

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const postCartIn = async (bookId) => {
  try {
    const res = await fetch(`${BASE_URL}/members/cart/${bookId}`, {
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
    });

    const result = await res.json();

    if (!result.message) throw new Error("NO MESSAGE");

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const deleteCartOut = async (bookId) => {
  try {
    const res = await fetch(`${BASE_URL}/members/cart/${bookId}`, {
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

    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const cartTotalCount = async () => {
  try {
    const res = await fetch(`${BASE_URL}/members/cart/totalCount`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${
          getLoginCookie("token")
            ? getLoginCookie("token")
            : sessionStorage.getItem("token")
        }`,
      },
    });
    const result = await res.json();

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const checkIsInMyCart = async (bookId) => {
  try {
    const res = await fetch(`${BASE_URL}/members/cart/check/${bookId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${
          getLoginCookie("token")
            ? getLoginCookie("token")
            : sessionStorage.getItem("token")
        }`,
      },
    });
    const result = await res.json();

    return result;
  } catch (err) {
    console.log(err);
  }
};
