import BASE_URL from "../config";

export const getBookInfo = async (bookId) => {
  try {
    const res = await fetch(`${BASE_URL}/books/${bookId}`, {
      method: "GET",
    });
    const result = await res.json();

    if (result.message) throw new Error(result.message);

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getBookCategory = async (category) => {
  try {
    const res = await fetch(`${BASE_URL}/books?category=${category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    if (result.message) throw new Error(result.message);

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getBestSeller = async () => {
  try {
    const res = await fetch(`${BASE_URL}/books/best-seller`, {
      method: "GET",
    });

    const result = await res.json();

    if (!result.length) throw new Error({ message: "데이터가 없습니다." });

    return result;
  } catch (err) {
    console.log(err);
  }
};
