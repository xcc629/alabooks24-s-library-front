import { createContext, useReducer, useEffect } from "react";
import { getUserInfo } from "../apis/user";
import { getLoginCookie } from "../utils/cookie";

export const UserContext = createContext();
export const UserDispatchContext = createContext();

const initialUser = {
  id: "",
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
    console.log("Context", token);
    if (token) {
      getUserInfo(token).then((data) => {
        if (data && !data.message) {
          userDispatch({ type: "LOGIN", payload: data });
        }
      });
    }
  }, [token, user.id]);

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={userDispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
