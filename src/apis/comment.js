import BASE_URL from "../config";

export const getComment = async (bookId) => {
  return await fetch(`${BASE_URL}/comments/${bookId}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const postComment = async (bookId, comment) => {
  return await fetch(`${BASE_URL}/comments/${bookId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...comment }),
  });
};

export const patchComment = async (bookId, commentId, comment) => {
  return await fetch(`${BASE_URL}/comments/${bookId}/${commentId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
