import BASE_URL from "../config";

export const postLoginData = async (idValue, passwordValue) => {
  return await fetch(`${BASE_URL}/members/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      loginId: idValue,
      password: passwordValue,
    }),
  })
    .then((res) => res.json())
    .then((result) => result);
};

export const postSignup = async (signupValueObj) => {
  return await fetch(`${BASE_URL}/members/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupValueObj),
  })
    .then((res) => res.json())
    .then((result) => result);
};

export const duplicateCheckId = async (idValue) => {
  return await fetch(`${BASE_URL}/members/validate/login-id`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ loginId: idValue }),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const duplicateCheckEmail = async (email) => {
  return await fetch(`${BASE_URL}/members/validate/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  })
    .then((res) => res.json())
    .then((data) => data);
};
