import BASE_URL from "../config";
import { getLoginCookie } from "../utils/cookie";

export const getComment = async (bookId) => {
  try {
    const res = await fetch(`${BASE_URL}/comments/${bookId}`, {
      method: "GET",
    });

    if (!res.ok) throw new Error({ message: "response is not Ok" });

    const result = await res.json();

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const postComment = async (bookId, comment) => {
  try {
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

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const patchComment = async (bookId, commentId, comment) => {
  return await fetch(`${BASE_URL}/comments/${bookId}/${commentId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
