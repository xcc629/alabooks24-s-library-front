import BASE_URL from "../config";

export const getBookInfo = async (bookId) => {
  return await fetch(`${BASE_URL}/books/${bookId}`, { method: "GET" })
    .then((res) => res.json())
    .then((data) => data);
};
