import { createContext, useReducer, useEffect } from "react";
import { getUserInfo } from "../apis/user";
import { getLoginCookie } from "../utils/cookie";

export const UserContext = createContext();
export const UserDispatchContext = createContext();

const initialUser = {
  loginId: "",
  emailAddress: "",
  joinDate: "",
};

function userReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return payload;
    case "LOGOUT":
      return initialUser;
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
}

export function ContextProvider({ children }) {
  const [user, userDispatch] = useReducer(userReducer, initialUser);
  const token = getLoginCookie("token")
    ? getLoginCookie("token")
    : sessionStorage.getItem("token");

  useEffect(() => {
    if (token && user.loginId === "") {
      getUserInfo(token).then((data) => {
        userDispatch({ type: "LOGIN", payload: data });
      });
    }
  }, [token, user.loginId]);

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={userDispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
