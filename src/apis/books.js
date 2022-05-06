import BASE_URL from "../config";

export const getBookInfo = async (bookId) => {
  return await fetch(`${BASE_URL}/books/${bookId}`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => data);
};

export const getBookCategory = async (category) => {
  return fetch(`${BASE_URL}/books?category=${category}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};
