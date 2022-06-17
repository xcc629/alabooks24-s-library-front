import BASE_URL from "../config";

export const getUserInfo = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/members/myInfo`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const postLoginData = async (idValue, passwordValue) => {
  try {
    const res = await fetch(`${BASE_URL}/members/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginId: idValue,
        password: passwordValue,
      }),
    });

    const result = await res.json();

    if (!result.message) throw new Error("failed response");

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const postSignup = async (signupValueObj) => {
  try {
    const res = await fetch(`${BASE_URL}/members/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupValueObj),
    });

    const result = await res.json();

    if (!result.message) throw new Error("failed response");

    return result;
  } catch (err) {
    console.log(err);
  }
};

export const duplicateCheckId = async (idValue) => {
  try {
    const res = await fetch(`${BASE_URL}/members/validate/login-id`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ loginId: idValue }),
    });
    const result = await res.json();

    if (result.message) throw new Error("failed response");
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const duplicateCheckEmail = async (email) => {
  try {
    const res = await fetch(`${BASE_URL}/members/validate/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    const result = await res.json();

    if (result.message) throw new Error("failed response");

    return result;
  } catch (err) {
    console.log(err);
  }
};
