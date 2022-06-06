import BASE_URL from "../config";
import { getLoginCookie } from "../utils/cookie";

export const getComment = async (bookId) => {
  return await fetch(`${BASE_URL}/comments/${bookId}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const postComment = async (bookId, comment) => {
  const res = await fetch(`${BASE_URL}/comments/${bookId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        getLoginCookie("token")
          ? getLoginCookie("token")
          : sessionStorage.getItem("token")
      }`,
    },
    body: JSON.stringify({ ...comment }),
  });

  return res;
};

export const patchComment = async (bookId, commentId, comment) => {
  return await fetch(`${BASE_URL}/comments/${bookId}/${commentId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
